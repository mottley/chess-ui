import React, { FunctionComponent } from 'react';
import './App.css';

import { Main } from './views/main/Main';
import { AppHeader } from './components/AppHeader/AppHeader';

const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      <AppHeader />
      <div className="App">
        <Main />
      </div>
    </React.Fragment>
  )
}

export default App;
