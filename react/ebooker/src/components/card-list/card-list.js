import React, { Component } from 'react';
import Card from '../card/card';

import './style.css';

class CardList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    renderCard(item){
        return(
            <Card 
                images={item.images}
                name={item.name} 
                quantity={item.quantity}
                price={item.price}
                isPaused={item.isPaused}
            />
        );
    }

    render(){
        const items = this.props.items; 
        return (
            <div className="card-list">
                {items.map(item => this.renderCard(item))}
            </div>
        );
    }
}

export default CardList;