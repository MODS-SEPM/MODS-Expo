// import Background from "../components/Background";
// import React from "react";
// import Header from '../components/Header'
// import {StyleSheet, View} from "react-native";
// import {Button} from "react-native-paper";
// import {theme} from "../core/theme";
// import {useState} from "react";
// import { Switch } from 'react-native';
//
// //const [isOn, setIsOn] = useState(false);
//
// export default function SettingsScreen() {
//
//     return (
//         <Background>
//
//         <Header>
//           SettingsScreen
//         </Header>
//
//
//         <View style={{ flexDirection:"column", justifyContent: 'center' }}>
//             <View style={styles.switchStyle}>
//
//                 <Switch
//
//               // value={isOn}
//               // onValueChange={setIsOn}
//                  />
//             </View>
//             {/*<View style={styles.switchStyle}>*/}
//             {/*    <Text>Dark Mode</Text>*/}
//             {/*    <Switch*/}
//             {/*  // value={isOn}*/}
//             {/*  // onValueChange={setIsOn}*/}
//             {/*     />*/}
//             {/*</View>*/}
//             {/*<View style={styles.switchStyle}>*/}
//             {/*    <Text>Dark Mode</Text>*/}
//             {/*    <Switch*/}
//             {/*  // value={isOn}*/}
//             {/*  // onValueChange={setIsOn}*/}
//             {/*     />*/}
//             {/*</View>*/}
//         </View>
//
//         </Background>
//     ) }
//
// const styles = StyleSheet.create({
//     map: {
//         height: '50%',
//         width: '50%',
//     },
//     switchStyle: {
//         // marginHorizontal: 25,
//         borderRadius: 500,
//         marginTop: 575,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//     },
//     iconStyle: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });


//This is an example code to understand Switch//

import React from 'react';
//import react in our code.

import { Switch, Text, View, StyleSheet } from 'react-native';
//import all the components we are going to use.

export default class App extends React.Component {
  //Initial state false for the switch. You can change it to true just to see.
  state = { switchValue: false };
  state1 = { switchValue: false };

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

   toggleSwitch2 = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <View style={styles.container}>
        {/*Text to show the text according to switch condition*/}
        <Text>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>

        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch2}
          value={this.state.switchValue}
        />
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state1.switchValue}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
