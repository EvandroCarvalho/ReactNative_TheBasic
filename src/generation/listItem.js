import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const listItem = (props) => {
    return (
        props.items.map((item, i) => (
            <TouchableOpacity
                onPress={()=> props.delete(i)}
                key={i}
                style={styles.listItem}
            >
                <View>
                    <Text>
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        ))
    )
}

export default listItem;

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: '#cecece',
        padding: 10,
        width: '100%',
        margin: 5,

    }
})