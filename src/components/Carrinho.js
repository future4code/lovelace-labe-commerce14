import React from "react";

import styled from "styled-components";

const BlocoCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;
const BlocoAdicionados = styled.div`
  margin: 15px;
  span {
    padding-right: 10px;
  }
`;

class Carrinho extends React.Component {
  render() {
    return (
      <BlocoCarrinho>
        <h3>Carrinho:</h3>
        <BlocoAdicionados>
          <span> 1x Produto </span>
          <button>Remover</button>
        </BlocoAdicionados>
        <BlocoAdicionados>
          <span> 1x Produto </span>
          <button>Remover</button>
        </BlocoAdicionados>
        <BlocoAdicionados>
          <span> 1x Produto </span>
          <button>Remover</button>
        </BlocoAdicionados>
        <p>Valor Total: </p>
      </BlocoCarrinho>
    );
  }
}

export default Carrinho;
