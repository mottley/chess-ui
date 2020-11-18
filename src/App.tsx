import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import { ChessBoard } from './components/ChessBoard/ChessBoard';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <ChessBoard />
    </div>
  )
}

export default App;
