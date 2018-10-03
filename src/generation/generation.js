import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const genenation = (props) => (
    <TouchableWithoutFeedback
        onPress={() => props.add()}
        //onLongPress={()=> alert('Touched on long press')}
        //onPressIn={()=> alert('Touched')}
       // onPressOut={()=> alert('Touched')}
       //delayLongPress={5000} // time on press
    >
        <View style = { styles.generation } >
            <Text>
                Add number
            </Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    generation: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        width: '100%',
        marginTop: 20,
    }
})

export default genenation;