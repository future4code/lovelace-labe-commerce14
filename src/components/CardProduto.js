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

const arrayDeProdutos = [
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
      value: 33000.0,
      imageUrl: "https://picsum.photos/200/200?a=4",
      }

]

export default class CardProduto extends Component {

  render() {
    const produtosCard = arrayDeProdutos.map((produtos, index) => {
      return (
        <ProductCard>
          <img src={produtos.imageUrl} alt="" />
          <h3>{produtos.name}</h3>
          <span>R$ {produtos.value}</span>
          <button>Adicionar ao carrinho</button>
        </ProductCard>
      )
    })
      return  (
        <>
          {produtosCard}
        </>
      )
  }
}
