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
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 2,
        name: "Foguete SpaceX",
        value: 33000.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
      },
      {
        id: 3,
        name: "Foguete 3",
        value: 13000.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
      {
        id: 4,
        name: "Foguete 4",
        value: 53000.0,
        imageUrl: "https://picsum.photos/200/200?a=5",
      },
    ],
    ValorMinimo: "",
    ValorMaximo: "",
    BuscaPorNome: "",
    Ordenacao: "",
    Carrinho: [],
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

  onChangeOrdenacao = (event) => {
    this.setState({ Ordenacao: event.target.value });
    console.log("alternei");
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
            <Carrinho />
          </nav>

          <main>
            <ContainerProdutos
              array={this.state.arrayProdutos}
              onChangeOrdenacao={this.onChangeOrdenacao}
              onclickOrdenacao={this.onChangeOrdenacao}
            />
          </main>
        </Conteudo>
      </GeneralContainer>
    );
  }
}
