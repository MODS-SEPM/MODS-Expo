import Background from "../components/Background";
import React from "react";
import Header from '../components/Header'
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import {theme} from "../core/theme";
import {useState} from "react";
import { Switch } from 'react-native';

//const [isOn, setIsOn] = useState(false);

export default function SettingsScreen() {

    return (
        <Background>

        <Header>
          SettingsScreen
        </Header>


        <View style={{ flexDirection:"column", justifyContent: 'center' }}>
            <View style={styles.switchStyle}>

                <Switch

              // value={isOn}
              // onValueChange={setIsOn}
                 />
            </View>
            {/*<View style={styles.switchStyle}>*/}
            {/*    <Text>Dark Mode</Text>*/}
            {/*    <Switch*/}
            {/*  // value={isOn}*/}
            {/*  // onValueChange={setIsOn}*/}
            {/*     />*/}
            {/*</View>*/}
            {/*<View style={styles.switchStyle}>*/}
            {/*    <Text>Dark Mode</Text>*/}
            {/*    <Switch*/}
            {/*  // value={isOn}*/}
            {/*  // onValueChange={setIsOn}*/}
            {/*     />*/}
            {/*</View>*/}
        </View>

        </Background>
    ) }

const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '50%',
    },
    switchStyle: {
        // marginHorizontal: 25,
        borderRadius: 500,
        marginTop: 575,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});