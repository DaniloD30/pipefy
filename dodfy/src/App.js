import React from 'react';
import GlobalStyle from './styles/global';
import Header from './componentes/Header';
import Board from './componentes/Board';

function App() {
  return (
    // fragmento, n aparece dentro do HTML
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
    );
}
export default App;
