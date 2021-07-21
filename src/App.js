import React from 'react';
import './App.css';
import styled from "styled-components";

const GeneralContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 300px 1fr;

  header {
    background-color: blue;
    grid-column: 1 / -1;
    width: 100%;
    height: 100%;
  }

  nav {
    background-color: green;
    width: 100%;
    height: 100%;
  }
`





export default class App extends React.Component {

  render() {


    return (

      <GeneralContainer>
        <header></header>

        <nav></nav>

        <main></main>

      </GeneralContainer>
      
      )
  }

}
