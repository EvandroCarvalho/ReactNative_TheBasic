import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const nav = (props) => (
    <View style={styles.nav} >
        <Text style={styles.text} >
            {props.nameOfApp}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    nav: {
        alignItems: 'center',
        backgroundColor: '#fff000',
        width: '100%',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#DDDD',
    },
    text: {
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default nav;