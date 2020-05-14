import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import CardList from './components/card-list/card-list';

class  App extends Component{
  
  render(){
    const testeImagens = [
      'https://www.museudememes.com.br/wp-content/uploads/2018/03/e-se-voc%C3%AA-virasse-um-meme-2.png',
      'https://uploads.metropoles.com/wp-content/uploads/2020/04/07145518/meme-do-caix%C3%A3o.jpg',
      'https://img.olhardigital.com.br/uploads/acervo_imagens/2016/02/r16x9/20160204135257_1200_675_-_simpsons.jpg'
    ]
    return(
      <div className="app-container">
        <NavBar className="navbar"
          renderLogo= {true}
          renderSearch={true}
          renderShopCart={true}
        />
        <Menu className="menu"
          menuItems={
          [
            {title: 'Pedidos', url: 'test'},
            {title: 'Produtos Cadastrados', url: 'test'},
            {title: 'Cadastrar novo', url: 'test'},
          ]
        }
        />
        <CardList className="card-list"
          items={
            [
              {
                type: "String",
                name: "String",
                quantity: 0,
                description: "String",
                images: testeImagens,
                price: 0,
                descount: 0,
                isPaused: false
              },
              {
                type: "String",
                name: "String",
                quantity: 0,
                description: "String",
                images: testeImagens,
                price: 0,
                descount: 0,
                isPaused: false
              },
              {
                type: "String",
                name: "String",
                quantity: 0,
                description: "String",
                images: testeImagens,
                price: 0,
                descount: 0,
                isPaused: true
              },
              {
                type: "String",
                name: "String",
                quantity: 0,
                description: "String",
                images: testeImagens,
                price: 0,
                descount: 0,
                isPaused: false
              },
              {
                type: "String",
                name: "String",
                quantity: 0,
                description: "String",
                images: testeImagens,
                price: 0,
                descount: 0,
                isPaused: true
              }
            ]
          }
        />
      </div>
    )
  }
}

export default App;
