import React, { Component } from "react";
import styled from "styled-components";

const Produtos = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 300px;
  grid-gap: 1rem;
`

const GeneralContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 50px 1fr;
  
`
const Ordenacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`


const ProductCard = styled.div`
  display: grid;
  grid-template-rows: 60% 10% 10% 20%;
  border: 1px solid black;
  justify-items: center;
  align-items: center;
  height: 350px;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 15px;

  button {
    width: 200px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid black;
    max-width: 80%;

    :hover {
      cursor: pointer;
    }
  }

  div {
    align-self: flex-start;
    width: 100%;
    height: 100%;
  }
`;

export default class ContainerProdutos extends Component {
  render() {
    const produtosCard = this.props.array.map((produtos, index) => {
      return (
        <ProductCard key={index}>
          <div>
            <img src={produtos.imageUrl} alt="" />
          </div>
          <h3> {produtos.name} </h3> <span> R$ {produtos.value} </span>
          <button> Adicionar ao carrinho </button>
        </ProductCard>
      );
    });
    return (
      <GeneralContainer>
        <Ordenacao>
          <div>
            Quantidade de produtos: {this.props.array.length}
          </div>
          <div>
            <span>Ordenação:</span>
            <select>
              <option value="cormal" onChange={this.props.onChangeOrdenacao}>Normal</option>
              <option value="crescente" onChange={this.props.onChangeOrdenacao}>Crescente</option>
              <option value="cecrescente" onChange={this.props.onChangeOrdenacao}>Decrescente</option>
            </select>
          </div>
        </Ordenacao>
        <Produtos>{produtosCard}</Produtos>
      </GeneralContainer>
    );
  }
}
