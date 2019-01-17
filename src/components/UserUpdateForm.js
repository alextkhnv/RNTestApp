import React, { Component } from 'react';
import { StyleSheet, Image, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class UserUpdateForm  extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    onFirsNameChange = (v) => {
        this.setTextToState("firstName", v);
    };

    onLastNameChange = (v) => {
        this.setTextToState("lastName", v);
    };

    setTextToState = (field, v) => {
        this.setState({
            [field]: v
        });
    };

    render(){
        const { firstName, lastName } = this.state;
        const { onClick, btnTitle, data: { logo } } = this.props;

        const defaultFirstName = this.props.data.firstName;
        const defaultLastName = this.props.data.lastName;

        const isValid = (!!firstName && !!lastName) || (!!defaultFirstName && !!defaultLastName);

        return (
            <View>
                <Image
                    style={styles.image}
                    source={{uri: logo}}/>
                <TextInput
                    defaultValue={defaultFirstName}
                    textInputRef="firstName"
                    ref={ref => ref && (this.firstName = ref)}
                    onChangeText={this.onFirsNameChange}
                    selectionColor="#333"
                    underlineColorAndroid="#333"
                    placeholder="First Name"/>
                <TextInput
                    defaultValue={defaultLastName}
                    textInputRef="lastName"
                    ref={ref => ref && (this.lastName = ref)}
                    onChangeText={this.onLastNameChange}
                    selectionColor="#333"
                    underlineColorAndroid="#333"
                    placeholder="Last Name"/>

                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Button
                        containerViewStyle={styles.buttonContainer}
                        disabled={!isValid}
                        large
                        borderRadius={10}
                        icon={{name: 'check'}}
                        title={btnTitle}
                        onPress={() => {
                            const firstName = this.firstName._lastNativeText;
                            const lastName = this.lastName._lastNativeText;
                            onClick({ firstName, lastName });
                        }}/>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginTop: 50
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 50
    },
    buttonContainer: {
        width: '100%',
        marginLeft: 0
    }
});

export default UserUpdateForm;