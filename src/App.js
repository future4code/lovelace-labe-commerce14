import React from 'react';
import './App.css';
import Filtros from './components/Filtros';
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

 const BlocoFiltroPreco = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
 ` 

export default class App extends React.Component {

  state = {
    ordenacao: "",
    filtroMin: "",
    filtroMax: "",
    filtroNome: "",
    listaProdutos: []
}



adicionaItemAoCarrinho = () => {
  
}

removeItemDoCarrinho = () => {

}

/* Estas acima são onClick
Estas abaixo vão ser onChange */

mudaFiltroMin = (event) => {
  this.setState({filtroMin: event.target.value})
}

mudaFiltroMan = (event) => {
  this.setState({filtroMax: event.target.value})
}

mudaFiltroNome = (event) => {
  this.setState({filtroNome: event.target.value})
}

mudaOrdenacao = (event) => {
    this.setState({ordenacao: event.target.value})
}

//teste

  render() {

    return (
        <GeneralContainer>
          <header></header>

        <nav>
          <Filtros>
          </Filtros>

          <Carrinho />

        </nav>

          <main>
            {/* Depois seria preciso mudar esta parte para o componente */}
            <BlocoFiltroPreco>
              <p>Quantidade de produtos:</p>
              <div>
                <p>Ordenação:</p>
                <select value={this.state.ordenacao}  onChange={this.mudaOrdenacao}>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>              
              </select>
              </div>
            </BlocoFiltroPreco>
            <Produtos>
              <CardProduto></CardProduto>
              
            </Produtos>
          </main>

        </GeneralContainer>
    )

  }

}
