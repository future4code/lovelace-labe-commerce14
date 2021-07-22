import React from 'react';
import styled from "styled-components";

const ContainerFiltros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px;

    form div {
        display: flex; 
        flex-direction: column;
        margin: 10px;

    }
`
export default class Filtros extends React.Component {

    render() {
        return (

            <ContainerFiltros>

                <div>
                <h3>Filtros</h3>
                </div>    

                <form>
                    <div>
                    <label>Valor Mínimo</label>
                    <input type="number" placeholder={"Digite o min"} />
                    </div>

                    <div>
                    <label>Valor Máximo</label>
                    <input placeholder={"Digite o max"} />
                    </div>

                    <div>
                    <label>Busca por nome</label>
                    <input placeholder={"Nome do produto"} />
                    </div>

                </form>
             
            </ContainerFiltros>
            

        )
    }    

}

