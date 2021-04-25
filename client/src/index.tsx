import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './App';
import store from './store/index';
import './index.css';
render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector('#root'),
);
