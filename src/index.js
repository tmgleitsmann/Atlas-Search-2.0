import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import {preloadPlayers} from './redux/actions/playerActions';
import './loader.styles.scss';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store/configureStore';



const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<div className='loader'></div>, document.getElementById('root'));
store.dispatch(preloadPlayers()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
