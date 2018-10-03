import React, {Component} from 'react';
import { Text, View, StyleSheet, Picker, Slider } from 'react-native';

class PickerComponent extends Component {

    state = {
        language:"english",
        value: 50
    }

    handleSliderChange = (value) => {
        this.setState({
            value: parseInt(value)
        })
        alert(value)
    }

    render() {
        return (
            <View style={styles.picker}
            >
                <Picker
                    style = {styles.picker}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex)=> {
                        this.setState({
                            language: itemValue
                        })
                    }}
                >
                    <Picker.Item  label="Spanish" value="spanish"/>
                    <Picker.Item  label="English" value="english"/>
                </Picker>
                <Slider
                value={this.state.value}
                maximumValue={100}
                minimumValue={1}
                step={20}
                onValueChange={this.handleSliderChange}
                />

            </View>
        )
    }

}

export default PickerComponent;

const styles = StyleSheet.create({
    picker: {
        width: '100%'
    }
});