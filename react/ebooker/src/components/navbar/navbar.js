import React, { Component } from 'react';

import './style.css';

class  Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            renderLogo: false,
            renderSearch: false,
            renderShopCart: false  
        };
    }

    renderLogo(){
        return(
            <div className="logo"></div>
        );
    }

    renderSearch(){
        return(
            <div>
                <input className="search-bar" placeholder="O que está procurando?"></input>
            </div>
        );
    }

    renderShopCart(){
        return(
            <div className="shop-cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
        );
    }
    render(){
      return(
        <div className="navbar">
          {this.props.renderLogo ? this.renderLogo() : null}
          {this.props.renderSearch ? this.renderSearch() : null}
          {this.props.renderShopCart ?  this.renderShopCart() : null}
        </div>
      )
    }
  }

  export default Navbar;