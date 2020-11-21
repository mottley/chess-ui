import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import { ChessBoard } from './components/ChessBoard/ChessBoard';
import { Main } from './views/main/Main';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Main />
    </div>
  )
}

export default App;
