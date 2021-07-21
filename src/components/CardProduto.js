import React, { Component } from 'react'
import styled from 'styled-components'

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  height: 300px;

  button{
    width: 200px;
  }

  img{

  }

`

export default class CardProduto extends Component {
  render() {
    return (
      <ProductCard>
        <img src="https://picsum.photos/200/200?a=2" alt="" />
        <h3>Produto</h3>
        <span>R$ 90,00</span>
        <button>Adicionar ao carrinho</button>
      </ProductCard>
    )
  }
}
