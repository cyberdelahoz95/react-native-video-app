import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import reducer from './reducers/videos';
import suggestionList from './videos/containers/suggestion-list';

/* const store = createStore(reducer, {
    suggestionList: [],
    categoryList: []
}) */

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);


export {store, persistor}