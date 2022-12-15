import Background from "../components/Background";
import React from "react";
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  return (
      <Background>
      <QRCode
      value="https://www.youtube.com/"
      size={310}
      backgroundColor = 'transparent'
    />

      </Background>
  ) }
