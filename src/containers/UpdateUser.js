import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import UserUpdateForm from '../components/UserUpdateForm';
import { updateUser as updateUserAction } from '../actions';

class UpdateUser extends Component<Props> {

    constructor() {
        super();
        this.state = {
            firstName: 'Alex',
            lastName: 'Proyas',
            logo: 'https://source.unsplash.com/random',
        };
    }

    onUpdate = data => {
        this.props.updateUser(data);
    };

    render() {
        const { data } = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.contentContainer} >
                    <UserUpdateForm data={data}
                                    btnTitle="Update"
                                    onClick={this.onUpdate}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    contentContainer: {
        backgroundColor: '#f2f2f2',
        width: "70%",
        alignSelf: 'center',
        paddingTop: 50,
        paddingBottom: 50
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = state => {
    return {
        data: state.user
    }
};

export default connect(mapStateToProps, {
    updateUser: updateUserAction
})(UpdateUser);