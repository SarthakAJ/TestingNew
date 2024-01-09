import 'materialize-css/dist/css/materialize.min.css';  
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import App from './componants/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
<Provider store = {store}><App />   </Provider>

);                  // render() takes 2 arguments .i.e. route & where we attempting to render 
