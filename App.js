/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';
import Orientation from 'react-native-orientation';
import { material } from 'react-native-typography'
import CircleButton from 'react-native-circle-button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
      counterOnOff: false
    };
    this.counterOnOff = true;
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(), 1000
    );
    this.intervalOn = setInterval(
      () => this.reverse(), 1000
    );

    Orientation.lockToLandscape();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    clearInterval(this.intervalOn);

  }

  reverse() {
    this.setState({
      counterOnOff: !this.state.counterOnOff
    });
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  items = [
    {
      name: 'md-home',
      color: '#298CFF'
    },
    {
      name: 'md-search',
      color: '#30A400'
    },
    {
      name: 'md-time',
      color: '#FF4B32'
    },
    {
      name: 'md-settings',
      color: '#8A39FF'
    },
    {
      name: 'md-navigate',
      color: '#FF6A00'
    }
  ];
  
  onPress = index => console.warn(`${this.items[index].name} icon pressed!`);
  onPressButtonTop = function(){
    Alert.alert(sadasd, '1234');
  };
  onPressButtonRight = {
  };
  onPressButtonBottom = {

  };
  onPressButtonLeft = {

  };

  render() {
    return (


      <View style={styles.container}>
        <View style={styles.button}>
            <CircleButton size={45} />
        </View>

        <View style={styles.timebox} >
          <Text style={[material.display4, styles.timeboxtextLeft]}>{Moment(this.state.time).format('HH')}</Text>        
        </View>
        <View style={styles.timer} >
          <Text style={[material.display4, styles.timeboxtext]}>{!this.state.counterOnOff ? ':' : ' '}</Text>
        </View>
        <View style={styles.timebox} >
          <Text style={[material.display4, styles.timeboxtextRight]}>{Moment(this.state.time).format('mm')}</Text>
        </View>
      </View>
    /*   <View style={styles.container}>
        <Text style={material.display4}>
        </Text>
      </View> */
    );
  }
/*   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>hi Welcome to React Native!</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View> 
    );
  }*/
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',   
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },button:{
    position: "absolute", bottom: 15, right: 15 },
  timebox: {
    flex: 5,
/*     backgroundColor: 'powderblue'
 */  },
  timer: {
    width: 20, 
/*     backgroundColor: 'powderblue'
 */  },
  timeboxtextLeft:{
    textAlign: 'right',
    paddingRight : 50
  },
  timeboxtextRight:{
    textAlign: 'left',
    paddingLeft : 50
  },
  timeboxtext:{
    textAlign: 'left',
    paddingBottom : 15
  },
  main: {
    backgroundColor: '#05FCFF',
    justifyContent: 'center',
    textAlign: 'center'
  },
  middle: {
    justifyContent: 'center',
    textAlign: 'center',
  }, actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
