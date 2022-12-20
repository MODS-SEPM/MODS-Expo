
import React, { useState, useEffect, Component } from 'react'
import { Text } from 'react-native-paper'
import {Dimensions, StyleSheet, View, Button, Alert} from 'react-native'

import Background from '../components/Background'
import MapView, {PROVIDER_GOOGLE, AnimatedRegion} from 'react-native-maps';
import Paragraph from '../components/Paragraph'

import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

//get screen height
// const {deviceWidth, deviceHeight} =Dimensions.get("window")

export default function MapScreen() {

    // state = {
    //     mapRegion: null,
    //     hasLocationPermissions: false,
    //     locationResult: null,
    // };
    //
    // componentDidMount() {
    //     this.getLocationAsync();
    // }
    //
    // handleMapRegionChange = (mapRegion) => {
    //     this.setState({mapRegion});
    // };
    //
    // async getLocationAsync() {
    //     // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    //     this.setState({hasLocationPermissions: true});
    //     //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    //     const location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //
    //     this.setState({locationResult: JSON.stringify(location)});
    //
    //     this.setState({
    //         mapRegion: {
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //             latitudeDelta: 0.0922,
    //             longitudeDelta: 0.0421,
    //         },
    //     });
    // }

    function PermissionAlert() {
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
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        );
    }
    function PermissionAlert2 (props) {
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
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        );
    }

    const region = {
    latitude: 48.4087589,
    longitude: 15.5866722,
    latitudeDelta: 0.0002,
    longitudeDelta: 0.0013
}



return (
    <MapView
      style={styles.map}
      onMapReady={PermissionAlert}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      region={region}
    />
)};



const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
