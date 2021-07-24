import React, { Component } from "react";
import styled from "styled-components";

const Produtos = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 300px;
  grid-gap: 1rem;
`;

const GeneralContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
const Ordenacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

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
  state = {
    Ordenacao: "",
  };

  arrayOrdenado = () => {
    const arrayOrdenadoFuncional = this.props.array.sort((a, b) => {
      if (this.props.Ordenacao === "crescente") {
        if (a.value < b.value) return -1;
        if (a.value > b.value) return 1;
        return 0;
      } else if (this.props.Ordenacao === "decrescente") {
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
        return 0;
      }
    });
    return arrayOrdenadoFuncional;
  };

  onChangeOrdenacao = (event) => {
    this.setState({ Ordenacao: event.target.value });
    console.log("alternei");
  };

  render() {
    const arrayFinal = this.arrayOrdenado();
    const produtosCard = arrayFinal.map((produtos, index) => {
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
          <div>Quantidade de produtos: {this.props.array.length}</div>
          <div>
            <span>Ordenação:</span>
            <select onChange={this.props.onChangeOrdenacao}>
              <option value="normal">Normal</option>
              <option value="crescente">Crescente</option>
              <option value="decrescente">Decrescente</option>
            </select>
          </div>
        </Ordenacao>
        <Produtos>{produtosCard}</Produtos>
      </GeneralContainer>
    );
  }
}
