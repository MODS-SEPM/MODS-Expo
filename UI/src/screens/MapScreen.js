import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import Background from '../components/Background'

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

//get screen height
const {deviceWidth, deviceHeight} =Dimensions.get("window")

export default function MapScreen({ navigation }) {
  return (
      <Background>
      <MapView
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
