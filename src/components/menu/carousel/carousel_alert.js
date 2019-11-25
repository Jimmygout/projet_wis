import React from 'react';
import {Spinner, Carousel} from "react-bootstrap";
import './carousel_alert.css';
class CarouselAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://127.0.0.1:8000/api/alerts.json")
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
    <Carousel.Item key={item.id} className="carousel_alert">
        <Carousel.Caption>
            <h3>{item.designation}</h3>
            <p>Date debut - Date fin</p>
        </Carousel.Caption>
    </Carousel.Item>           
                    ))}
</Carousel>

                </div>
              
            );
        }
    }
}

export default CarouselAlert;
