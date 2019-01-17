import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import UserInfo from './src/components/UserUpdateForm';
import AppWithNavigationState from './src/navigators/AppNavigator';

const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;

const store = configureStore({});

const app = () => (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
);

export default app;
