import React, { Component } from "react";
import styled from "styled-components";

const Produtos = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-height: 300px;
  grid-gap: 1rem;

  div > img {
    height: 100%;
    width: 100%;
  }
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
    Ordenacao: "decrescente",
  };

  arrayOrdenado = () => {
    const arrayOrdenadoFuncional = this.props.arrayProdutos
      .filter((produto) =>
        this.props.valueValorMaximo
          ? produto.value < this.props.valueValorMaximo
          : true
      )
      .filter((produto) =>
        this.props.valueValorMinimo
          ? produto.value > this.props.valueValorMinimo
          : true
      )
      .filter((produto) =>
        this.props.valueBuscaPorNome
          ? produto.name.includes(this.props.valueBuscaPorNome)
          : true
      )
      .sort((a, b) => {
        if (this.state.Ordenacao === "crescente") {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        } else if (this.state.Ordenacao === "decrescente") {
          if (a.value < b.value) return 1;
          if (a.value > b.value) return -1;
          return 0;
        }
      });
    return arrayOrdenadoFuncional;
  };

  onChangeOrdenacao = (event) => {
    this.setState({ Ordenacao: event.target.value });
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
          <button
            onClick={() => this.props.adicionaItemNoCarrinho(produtos.id)}
          >
            Adicionar ao carrinho
          </button>
        </ProductCard>
      );
    });

    return (
      <GeneralContainer>
        <Ordenacao>
          <div>Quantidade de produtos: {arrayFinal.length}</div>
          <div>
            <span>Ordenação:</span>
            <select onChange={this.onChangeOrdenacao}>
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
