import React from 'react';
import './App.css';
import Carrinho from './components/Carrinho';
import styled from 'styled-components';
import CardProduto from './components/CardProduto'
import { Produtos } from './App.styled'


const GeneralContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 300px 1fr;
  max-width: 1200px;
  margin: 0 auto;

  header {
    background-color: blue;
    grid-column: 1 / -1;
    width: 100%;
    height: 100%;
  }

  nav {
    background-color: green; 
    width: 100%;
    height: 100%;
  }

  main{
    overflow: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 20px;
      border: 3px solid transparent;
    }
  }

`

export default class App extends React.Component {

  render() {


    return (
        <GeneralContainer>
          <header></header>

        <nav>
          <div id="filtro" />
          <Carrinho></Carrinho>

        </nav>

          <main>
            <Produtos>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
              <CardProduto></CardProduto>
            </Produtos>
          </main>

        </GeneralContainer>
    )
  }

}
