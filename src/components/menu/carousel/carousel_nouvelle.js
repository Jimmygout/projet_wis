import React from 'react';
import {Spinner, Carousel} from "react-bootstrap";
import './carousel_nouvelle.css';
class CarouselNouvelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://127.0.0.1:8000/api/nouvelles.json")
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
                <div>

<Carousel>
    {items.map(item => ( 
    <Carousel.Item key={item.id} className="carousel_nouvelle">
        <Carousel.Caption className="caption_nouvelle">
            <p>{item.designation}</p>
            
        </Carousel.Caption>
    </Carousel.Item>           
                    ))}
</Carousel>

                </div>
              
            );
        }
    }
}

export default CarouselNouvelle;
