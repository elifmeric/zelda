/*
Every component has a state and needs reducers
Reducers are listed here. 
Reducer is simply a js object. It has keys and the keys have values
and the values are your storage state, keys are how you access that 
storage state so
*/

import {createStore, combineReducers} from 'redux';
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
})

const store = createStore(
    rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


  export default store;