import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './stylesheets/styles.css';
import { store } from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}
