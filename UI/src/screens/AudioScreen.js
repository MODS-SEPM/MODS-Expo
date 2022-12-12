import Background from "../components/Background";
import React from "react";
import {StyleSheet} from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// import { TrackPlayer } from "react-native-track-player";
import Header from '../components/Header'

export default function AudioScreen() {
  return (
      <Background>

          <Header>Audio Player</Header>

         {/* TrackPlayer.load({{
          title: "Awesome song",
          artist: "Mr. Awesome",
          album: "Awesome songs only",
          cover: "https://source.unsplash.com/random",
          path: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
      }}).then(() => {
    console.log("audio loaded")};
  });
};

play = () => {
          TrackPlayer.play()};
      };

pause = () => {
          TrackPlayer.pause()};
      };*/}

      </Background>
  ) }

const styles = StyleSheet.create({
  map: {
    height: '50%',
    width: '50%',
  },
});
