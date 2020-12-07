import React, { FunctionComponent, useEffect } from 'react';
import './App.css';

import { Main } from './views/main/Main';
import { AppHeader } from './components/AppHeader/AppHeader';
import { useDispatch } from 'react-redux';
import { CheckAuthenticatedAction } from './redux/actions/AuthenticationAction';

const App: FunctionComponent = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(new CheckAuthenticatedAction())
  }, [])

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
