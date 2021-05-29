import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCombineReducers, persistStore} from 'redux-persist'
import {createLogger} from "redux-logger"


const middleware = [];
middleware.push(thunk);
middleware.push(createLogger());

const reducer = persistCombineReducers( 
    {
        key: 'primary',
        storage: AsyncStorage,
        timeout: null,
        blacklist: ['rehydrateReducer', 'ajax', 'routing']
    }, reducers);

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducer,
        composeEnhancer(
            applyMiddleware(...middleware),
        )
    );

    let persistor = persistStore(store);
     export default {store, persistor};

    



