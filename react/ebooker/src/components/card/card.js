import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './style.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            name: '',
            quantity: '',
            price: '',
            isPaused: ''
        };
    }
    render() {
        const isPaused = this.props.isPaused;
        const status = isPaused ? 'PAUSADO' : 'ATIVO';
        const color = isPaused ? '#F3313C' : '#0073B1';

        return (
            <div className="card">
                <Carousel autoPlay showThumbs={false} infiniteLoop>
                    {
                        this.props.images.map(image => {
                            return (
                                <div className="img">
                                    <img className="card-img" src={image} alt="img"></img>
                                </div>
                            );
                        })
                    }
                </Carousel>
                <div className="card-content" style={{ backgroundColor: color }}>
                    <p className="card-name">NOME: {this.props.name}</p>
                    <p className="card-quantity">QUANTIDADE: {this.props.quantity}</p>
                    <p className="card-price">PREÇO: {this.props.price}</p>
                    <p className="card-isPaused">STATUS: {status}</p>
                </div>
            </div>
        );
    }
}

export default Card;