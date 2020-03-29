import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import playerReducer from '../reducers/playerReducer';
import selectPlayerReducer from '../reducers/selectPlayerReducer';
import playerDataReducer from '../reducers/playerDataReducer';
import thunk from 'redux-thunk';
//import PlayersRetrieved from '../../pages/PlayersRetrieved/PlayersRetrieved';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            players:playerReducer,
            selectPlayer:selectPlayerReducer,
            playerData:playerDataReducer
        }), composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}