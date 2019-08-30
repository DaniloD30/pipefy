import React from 'react';
import GlobalStyle from './styles/global';
import Header from './componentes/Header';
import Board from './componentes/Board';
import { DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
  return (
    // fragmento, n aparece dentro do HTML
    <DndProvider backend={HTML5Backend}>
     
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
    );
}
export default App;
