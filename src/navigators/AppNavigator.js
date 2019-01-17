import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import { updateUser as updateUserAction } from '../actions';
import PreUpdateUser from '../containers/PreUpdateUser';
import UpdateUser from '../containers/UpdateUser';

export const AppNavigator = StackNavigator({
    UserPreUpdate: {
        screen: PreUpdateUser
    },
    UserUpdate: {
        screen: UpdateUser
    }
}, {
    headerMode: 'none'
});

class AppWithNavigationState extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        fetch('https://source.unsplash.com/random')
            .then(response => {
                console.log(response);
                this.props.updateUser({ logo: response.url });
                SplashScreen.hide();
            });
    }

    render() {
        return (
            <AppNavigator />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    nav: state.nav
});

export default connect(mapStateToProps, {
    updateUser: updateUserAction
})(AppWithNavigationState);