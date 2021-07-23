import React, { Component } from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  input{
    box-sizing: border-box;
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 15px;
    border: 1px solid transparent;
    height: 30px;

    &:focus {
      outline: 0;
    }
  }
`


export default class Filtros extends Component {
  render() {
    return (
      <ContainerFiltros>
        <h3>Filtros</h3>

        <form action="">
          <div>
            <label>Valor Mínimo</label>
            <input
              value={this.props.valueValorMinimo}
              onChange={this.props.onChangeValorMinimo}
              type="number"
              placeholder="Digite o min"
            />
          </div>
          <div>
            <label>Valor Máximo</label>
            <input
              value={this.props.valueValorMaximo}
              onChange={this.props.onChangeValorMaximo}
              type="text"
              placeholder="Digite o max" />
          </div>
          <div>
            <label>Busca por nome</label>
            <input
              value={this.props.valueBuscaPorNome}
              onChange={this.props.onChangeBuscaPorNome}            
              type="text"
              placeholder="Nome do produto" />
          </div>
        </form>
      </ContainerFiltros>
    );
  }
}

