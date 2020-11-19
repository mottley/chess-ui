import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store/createStore';
import { configureRouter } from './routes/configureRouter';
import { RouterProvider } from 'react-router5';

const router = configureRouter();
const store = createReduxStore(router);

const index = (
  <Provider store={store}>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </Provider>
)

router.start((err, state) => {
  ReactDOM.render(index, document.getElementById('root'));
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
