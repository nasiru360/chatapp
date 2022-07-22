import myreducer from './Reducer'
import {createStore} from 'redux'
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfiguration={
    key:'persist-key',
    storage
}

const persistedReduser=persistReducer(persistConfiguration,myreducer)

const store=createStore(persistedReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    const persistor=persistStore(store)

    export default store;
    export {persistor}


