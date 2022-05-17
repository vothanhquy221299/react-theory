//import ham khoi tao store redux
import { createStore, combineReducers } from 'redux';
import shoesShopReducer from './reducers/shoesShopReducer';
import gameXucXacReducer from './reducers/gameXucXacReducer'

//Khoi tao root reducer(quan li cac reducer)
const rootReducer = combineReducers({
    shoesShopReducer,//shoesShopReducer: shoesShopReducer
    gameXucXacReducer
})

//Khoi tao store (quan li root reducer)
const store = createStore(rootReducer, 
    //setup redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
