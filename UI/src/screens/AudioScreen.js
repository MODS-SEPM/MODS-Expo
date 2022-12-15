import Background from "../components/Background";
import React from "react";
// import {StyleSheet} from "react-native";
import {StyleSheet, Text, View} from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// import { TrackPlayer } from "react-native-track-player";
import Header from '../components/Header'
import {Button} from "react-native-paper";
// import Icon from 'react-native-vector-icons/FontAwesome';


export default function AudioScreen() {
  return (
        <Background>


            <Header>Audio Player</Header>
            <View style={{ flexDirection:"row", justifyContent: 'center' }}>
                <View style={styles.buttonStyle}>
                    <Button
                        icon="skip-previous"
                        mode="contained"
                        onPress={() => console.log('Pressed previous')}
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        icon="play"
                        mode="contained"
                        // onPress={pauseButton()}
                        onPress={() => console.log('Pressed play')}
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        icon="skip-next"
                        mode="contained"
                        onPress={() => console.log('Pressed next')}
                    />
                </View>
            </View>

         {/* TrackPlayer.load({{
          title: "Awesome song",
@ -19,23 +64,28 @@ export default function AudioScreen() {
          path: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
      }}).then(() => {
    console.log("audio loaded")};
  });
};
    });
    };

play = () => {
    play = () => {
          TrackPlayer.play()};
      };

pause = () => {
    pause = () => {
          TrackPlayer.pause()};
      };*/}

      </Background>
  ) }

const styles = StyleSheet.create({
  map: {
    map: {
    height: '50%',
    width: '50%',
  },
    },
    buttonStyle: {
    marginHorizontal: 25,
    marginTop: 575,
    justifyContent: 'center',
  }
});