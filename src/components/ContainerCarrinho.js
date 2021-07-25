import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  margin: 2rem 0;
`;

export default class Carrinho extends Component {
  render() {
    return (
      <ContainerCarrinho>
        <h3>Carrinho</h3>
        <div>
          <span>{this.props.carrinho.name}</span>
          <span>{this.props.carrinho.quantity}</span>
          <button>Remover</button>
        </div>
        <p>Valor total</p>
      </ContainerCarrinho>
    );
  }
}
