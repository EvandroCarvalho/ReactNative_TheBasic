
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ListView
} from 'react-native';

import Nav from './src/nav/nav';
import Generation from './src/generation/generation';
import ListItem from './src/generation/listItem';
import Input from './src/input/input';
import PickerComponent from './src/picker/picker';
import ModalComponent from './src/modal/modal';

export default class App extends Component {

  state = {
    nameOfApp: 'My awesome app',
    random: [20,13]
  }

  onAddRandon = () => {
    const random = Math.floor(Math.random()*100) + 1;
    //this.setState({random : [...this.state.random, random]})  or
    this.setState(prevState => {
      return {
        random: [...prevState.random, this.state.random.indexOf(random) == -1 ? random : Math.floor(Math.random()*100) + 1
        ]
      }
    })
  }

  onItemDelete = (i) => {
    const newArray = this.state.random.filter((item, index)=> {
        return i !== index
    })
    this.setState({random: newArray})
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav
          nameOfApp={this.state.nameOfApp}
        />
          <ScrollView style={{width: '100%'}}
            //onContentSizeChange = {(w,h) => alert(h)}
            //onMomentumScrollBegin={()=> alert('begin')} // pode sar usado para atualizar a pagina
            //onMomentumScrollEnd={()=> alert('end')}
            //onScroll={() => alert('scrolling')}
          >
            <View style={styles.wrapper}>
              <Generation
                add={this.onAddRandon}
              />
              <ListItem
                items={this.state.random}
                delete={this.onItemDelete}
              />
              {/*<Input/>*/}
             {/*<PickerComponent/>*/}
            <ModalComponent/> 
            </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
