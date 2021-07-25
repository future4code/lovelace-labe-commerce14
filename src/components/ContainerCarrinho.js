import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  margin: 2rem 0;
`;

export default class Carrinho extends Component {
  render() {
    const carrinho = this.props.carrinho.map((produto) => {
      return (
        <div>
          <span>{produto.name}</span>
          <span>{produto.quantity}</span>
          <button>Remover</button>
        </div>
      );
    });
    return (
      <ContainerCarrinho>
        <h3>Carrinho</h3>
        <div>{carrinho}</div>
        <p>Valor total</p>
      </ContainerCarrinho>
    );
  }
}
