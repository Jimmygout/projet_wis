import React from 'react';
import {Carousel} from "react-bootstrap";
const Nouvelle = () =>(
    <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
);


export default Nouvelle;
