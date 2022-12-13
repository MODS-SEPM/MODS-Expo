import React from 'react'
import {Dimensions, StyleSheet, View, Button, Alert} from 'react-native'

import Background from '../components/Background'

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

//get screen height
const {deviceWidth, deviceHeight} =Dimensions.get("window")

export default function MapScreen({ navigation }) {
    const PermissionAlert = () => {
        Alert.alert(
            "Location Permission",
            "This app needs access to your location.",
            [
                {
                    text: "Cancel",
                    // run permission alert 2
                    onPress: () => PermissionAlert2(),
                    style: "cancel"
                },
                // set location permission to true
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    const PermissionAlert2 = () => {
        Alert.alert(
            "Wait!",
            "The map will not work without location permission.\nClick 'OK' to enable it.",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                // set location permission to true
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
  return (
      <Background>
      <MapView
          // check if user has location permission
          // call the permission alert
          onMapReady={PermissionAlert}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          />

      </Background>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
