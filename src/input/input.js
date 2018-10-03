import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';

class Input extends Component {

    state = {
        myInput: '',
        users: ['Jhon', 'James']
    }

    onChangeInput = (value) => {
        this.setState({
            myInput: value
        })
    }

    onAddUser = () => {
        if(this.props.myInput != ''){
            this.setState(
                prevState => {
                    return {
                        users: [...prevState.users, prevState.myInput],
                        myInput: ''
                    }
                }
            )
        }
    }

    render() {
        return (
            <View style={styles.input} >
                <TextInput
                    placeholder='writer where'
                    value = {this.state.myInput}
                    onChangeText={this.onChangeInput}
                    multiline={true}
                //    maxLength={100}
                    editable={true}
                    autoCorrect={true}
                    //autoCapitalize={'characters'} all char uppercase
                    //autoCapitalize={'none'} // not initialize with uppercase
                    autoCapitalize={'words'} // all first char uppercase
                />
                <Button
                    title = 'add User'
                    onPress = { this.onAddUser }
                />
                {
                    this.state.users.map((item,i) => (
                            <Text
                             key={i}
                             style={styles.users}>
                                {item}
                            </Text>
                    ))
                }
            </View>
        )
    }
}

export default Input;


const styles = StyleSheet.create({
    input: {
        width: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
    },
    users: {
        fontSize: 30,
        borderWidth: 1,
        borderBottomColor: '#cecece',
        padding: 10,
        margin: 5,
    }
})