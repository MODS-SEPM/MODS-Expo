
import React, { useState, useEffect, Component } from 'react'
import { Text } from 'react-native-paper'
import React from 'react'
import {Dimensions, StyleSheet, View, Button, Alert} from 'react-native'

import Background from '../components/Background'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Paragraph from '../components/Paragraph'

import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

//get screen height
// const {deviceWidth, deviceHeight} =Dimensions.get("window")

export default class MapScreen extends Component {
state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  async getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

      this.setState({ locationResult: JSON.stringify(location) });

      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    }



export default function MapScreen() {
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
    render() { return (
      <MapView
          // check if user has location permission
          // call the permission alert
          onMapReady={PermissionAlert}
          style={styles.map}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
          provider={PROVIDER_GOOGLE}
        />

    );
  }


//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//
//   useEffect(() => {
//     (async () => {
//
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }
//
//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);
//
//   let text = 'Waiting..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }
//
//   return (
//     <View>
//       <Paragraph >{text}</Paragraph>
//     </View>
//   );
// }

    // (async () => {
    //     const foregroundPermission = await Location.requestForegroundPermissionsAsync()
    // })
    //
    // return (
    //     <Background>
    //         <MapView
    //             style={styles.map}
    //             provider={PROVIDER_GOOGLE}
    //             showsUserLocation={true}
    //         />
    //     </Background>
    // );


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
