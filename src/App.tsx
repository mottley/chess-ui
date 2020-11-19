import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import { ChessBoard } from './components/ChessBoard/ChessBoard';
import { Login } from './components/Login/Login';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      {/* <ChessBoard /> */}
      <Login />
    </div>
  )
}

export default App;
