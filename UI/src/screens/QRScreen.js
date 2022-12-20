import Background from "../components/Background";
import React from "react";
import QRCode from 'react-native-qrcode-svg';
import { Text } from 'react-native-paper';
import {StyleSheet} from "react-native";
import {theme} from "../core/theme";

export default function QRScreen() {
  return (
      <Background>
      <Text style={styles.text}> Share your current itinerary with a friend :) </Text>
      <QRCode
      // value="https://www.youtube.com/"
          value = "exp://192.168.8.169:19000"
      size={310}
      backgroundColor = 'transparent'
    />

      </Background>
  ) }


const styles = StyleSheet.create({
   text: {
      fontSize: 15,
      color: theme.colors.secondary,
      marginBottom: 24,
  }
});