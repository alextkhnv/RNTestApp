import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const mainAction = AppNavigator.router.getActionForPathAndParams('UserPreUpdate');
const initialNavState = AppNavigator.router.getStateForAction(mainAction);

export default nav = (state = initialNavState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}