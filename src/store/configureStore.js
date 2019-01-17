// Redux Store Configuration
import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState: Object) => {
    return createStore(rootReducer, initialState);
};

export default configureStore;
