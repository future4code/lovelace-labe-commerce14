import React, { Component } from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  margin: 2rem 0;
`;

const ProdutosCarrinho = styled.div`
  margin: 1rem;
  background-color: white;
  height: 100%;
  border-radius: 20px;
  border: 1px solid black;
  padding: 10px;

  div {
    margin: 5px 0;
  }
`;

export default class Carrinho extends Component {
  render() {
    const carrinho = this.props.carrinho.map((produto) => {
      return (
        <ProdutosCarrinho>
          <span>{produto.name} x</span>
          <span>{produto.quantity}</span>
          <div>
            <button
              onClick={() => this.props.removerItemNoCarrinho(produto.id)}
            >
              Remover
            </button>
          </div>
        </ProdutosCarrinho>
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
