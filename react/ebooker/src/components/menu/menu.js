import React, { Component } from 'react';

import './style.css';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: [],
        };
    }
    render(){
        return(
            <div className="menu">
                {
                    this.props.menuItems ? 
                    this.props.menuItems.map(item => (
                    <li className="menu-item">{item.title}</li>
                    ))
                    :null
                }
            </div>
        );
    }
}

export default Menu;