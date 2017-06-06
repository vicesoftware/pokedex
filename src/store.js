import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Reducers
import DexReducer from './pokeDeck/rootReducer'
import UsrReducer from './userDeck/rootReducer'
import InitDeckReducer from './common/rootReducer'

// break up reducers per appropriate state data
const reducers = combineReducers({
  user: UsrReducer,
  glossary: DexReducer,
  initDeck: InitDeckReducer
})

const middleware = applyMiddleware(thunk, logger);

// pass in initial state object at 0
export default createStore(reducers, middleware);
