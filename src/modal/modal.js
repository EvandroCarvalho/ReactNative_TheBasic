import React,{Component} from 'react';
import {StyleSheet, View, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {
    state={
        modal:false
    }

    handleModal = () => {
        this.setState({
            modal: !this.state.modal ? true : false
        })
    }

    render() {
        return (
            <View style={styles.modal}>
                <Button
                    title='Open Modal'
                    onPress={this.handleModal}
                />

                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onShow={()=> (
                        alert('modal is visibel')
                    )}
                >
                    <View style={styles.modal}>
                        <Text>
                            Modal Compoenent
                        </Text>
                        <Button
                            title='Close modal'
                            onPress={this.handleModal}
                        />
                    </View>
                </Modal>

            </View>
        )
    }
}

export default ModalComponent

const styles = StyleSheet.create({
    view: {
        width: '100%'
    },
    modal: {
        marginTop: 20,
        backgroundColor:'red'
    }
});