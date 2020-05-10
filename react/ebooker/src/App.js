import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar/navbar';
import Menu from './components/menu/menu';

class  App extends Component{
  
  render(){
    return(
      <div>
        <NavBar 
          renderLogo= {true}
          renderSearch={true}
          renderShopCart={true}
        />
        <Menu 
          menuItems={
          [
            {title: 'item-1', url: 'test'},
            {title: 'item-1', url: 'test'},
            {title: 'item-1', url: 'test'},
            {title: 'item-1', url: 'test'}
          ]
        }
        />
      </div>
    )
  }
}

export default App;
