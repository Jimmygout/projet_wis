import React from 'react';
import {CardDeck, Card, Spinner} from "react-bootstrap";
import './card_concert.css';

class CardConcert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://127.0.0.1:8000/api/concerts.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div><Spinner className="text-center mt-4" animation="border" variant="warning" /></div>;
        } else {
            return (
                <div id={'card_menu'}>

<CardDeck>
    {items.map(item => ( 
         
         
             <Card key={item.id}>
                 <Card.Img variant="top" src="https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                 <Card.Body>
                     <Card.Title>{item.chanteur}</Card.Title>
                     <Card.Text>
                     {item.designation}
                     </Card.Text>
                 </Card.Body>
                 <Card.Footer>
                     <small className="text-muted">Date du concert</small>
                 </Card.Footer>
             </Card>
    
         
     ) )}
                    </CardDeck>
         </div>
              
            );
        }
    }
}


export default CardConcert;
