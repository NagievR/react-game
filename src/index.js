import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HandlersProvider } from './logic/handlers';
import { DefineActionProvider } from './logic/define-action';
import { StoreProvider } from './logic/store';


const appWrapped = (
  <StoreProvider>
    <HandlersProvider>
      <DefineActionProvider>
        <App />
      </DefineActionProvider>
    </HandlersProvider>
  </StoreProvider>
);

ReactDOM.render(
  appWrapped,
  document.getElementById('root')
);