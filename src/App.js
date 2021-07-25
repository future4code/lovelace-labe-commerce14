import React from "react";
import "./App.css";
import styled from "styled-components";

import Filtros from "./components/ContainerFiltros";
import Carrinho from "./components/ContainerCarrinho";
import ContainerProdutos from "./components/ContainerProdutos";

const GeneralContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  justify-items: center;
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #141f36;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    color: white;
  }
`;

const Conteudo = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 300px 1fr;

  nav {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    display: flex;
    text-align: center;
    background-color: #e0e0e0;
  }
`;

export default class App extends React.Component {
  state = {
    arrayProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/13/15/19/spaceship-2745801__340.png",
      },
      {
        id: 2,
        name: "Foguete SpaceX",
        value: 33000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/14/15/41/spaceship-2749363__340.png",
      },
      {
        id: 3,
        name: "Foguete Spaceless",
        value: 13000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/10/10/15/31/spaceship-2837603__340.png",
      },
      {
        id: 4,
        name: "Foguete Atlas-Agenas",
        value: 53000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/10/11/14/57/spaceship-2841277__340.png",
      },
      {
        id: 5,
        name: "Foguete Thor-Ablestar",
        value: 20000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/06/16/12/spaceship-2722105__340.png",
      },
      {
        id: 6,
        name: "Foguete Thor-Delta",
        value: 30000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/31/14/35/fighter-2024613__340.png",
      },
      {
        id: 7,
        name: "Foguete Rehbar-I",
        value: 100000.0,
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/06/17/17/40/ufo-6344191__340.png",
      },
    ],
    ValorMinimo: "",
    ValorMaximo: "",
    BuscaPorNome: "",
    carrinho: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
        quantity: 1,
      },
      {
        id: 2,
        name: "Foguete SpaceX",
        value: 33000.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
        quantity: 1,
      },
    ],
  };

  adicionaItemNoCarrinho = (id) => {};

  onChangeValorMinimo = (event) => {
    this.setState({ ValorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ ValorMaximo: event.target.value });
  };

  onChangeBuscaPorNome = (event) => {
    this.setState({ BuscaPorNome: event.target.value });
  };

  render() {
    return (
      <GeneralContainer>
        <header>
          <h1>Labecommerce</h1>
        </header>
        <Conteudo>
          <nav>
            <Filtros
              valueValorMinimo={this.state.ValorMinimo}
              valueValorMaximo={this.state.ValorMaximo}
              valueBuscaPorNome={this.state.BuscaPorNome}
              onChangeValorMinimo={this.onChangeValorMinimo}
              onChangeValorMaximo={this.onChangeValorMaximo}
              onChangeBuscaPorNome={this.onChangeBuscaPorNome}
            />
            <Carrinho
              produtos={this.state.arrayProdutos}
              adicionaItem={this.adicionaItemNoCarrinho}
              carrinho={this.state.carrinho}
            />
          </nav>

          <main>
            <ContainerProdutos
              array={this.state.arrayProdutos}
              onChangeOrdenacao={this.onChangeOrdenacao}
              onclickOrdenacao={this.onChangeOrdenacao}
              valueValorMinimo={this.state.ValorMinimo}
              valueValorMaximo={this.state.ValorMaximo}
              valueBuscaPorNome={this.state.BuscaPorNome}
              onChangeValorMinimo={this.onChangeValorMinimo}
              onChangeValorMaximo={this.onChangeValorMaximo}
              onChangeBuscaPorNome={this.onChangeBuscaPorNome}
            />
          </main>
        </Conteudo>
      </GeneralContainer>
    );
  }
}
