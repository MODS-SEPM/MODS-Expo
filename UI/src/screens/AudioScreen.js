import Background from "../components/Background";
import React from "react";
// import {StyleSheet} from "react-native";
import {StyleSheet, Text, View} from "react-native";
// import SoundPlayer from 'react-native-sound-player'
// import { TrackPlayer } from "react-native-track-player";
import Header from '../components/Header'
import {Button} from "react-native-paper";
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from "expo-av";
import Slider from '@react-native-community/slider';
import volume from '../assets/volume.png'
import Logo from '../components/Logo'


export default function AudioScreen() {

    const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/audio.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  
    return (
        <Background>
        <View style={styles.container}>
            <View style={{ flex: 4, marginTop: 40 }}>
                <Header>Audio Guide</Header>
            </View>
            <View style={{ flex: 8 }}>
                <Logo />
            </View>

            <View style={{ flex: 2}}>
                <Text style={styles.title}>Skating in Vienna</Text>
            </View>

            <View style={{ flex: 2, flexDirection: "row" }}>
                <View>
                    <Text style={styles.time}>1:34</Text>
                </View>
                <Slider
                    style={{width: 290}}
                    minimumValue={0}
                    maximumValue={100}
                    maximumTrackTintColor="#000000"
                    minimumTrackTintColor="#666666"
                    thumbTintColor={'#f3b343'}
                />
                <View>
                    <Text style={styles.time}>-2:11</Text>
                </View>
            </View>

            <View style={{ flex: 5, flexDirection:"row", justifyContent: 'center' }}>
                <View style={styles.buttonStyle}>
                    <Button
                        labelStyle={{ fontSize: 44 }}
                        icon="skip-previous"
                        //mode="contained"
                        onPress={() => console.log('Pressed previous')}
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button
                        labelStyle={{ fontSize: 66 }}
                        icon="play"
                        //mode="contained"
                        // onPress={pauseButton()}
                        onPress={playSound}
                        // onPress={() => console.log('Pressed play')}
                    />
                </View>
                <View style={styles.buttonStyle}>
                    <Button style={{marginRight: -10}}
                        labelStyle={{ fontSize: 44 }}
                        icon="skip-next"
                        //mode="contained"
                        onPress={() => console.log('Pressed next')}
                    />
                </View>
            </View>

            <View style={{ flex: 2, flexDirection:"row" }}>
                <View>
                    <Button
                        labelStyle={{ fontSize: 15 }}
                        icon={volume}
                        //mode="contained"
                        onPress={() => console.log('Pressed soundSmall')}
                    />
                </View>
                <View>
                    <Slider
                        style={{width: 240, marginTop: -4}}
                        minimumValue={0}
                        maximumValue={100}
                        maximumTrackTintColor="#000000"
                        minimumTrackTintColor="#666666"
                        thumbTintColor={'#f3b343'}
                    />
                </View>
                <View>
                    <Button style={{marginLeft: 10, marginRight: -10}}
                        labelStyle={{ fontSize: 19 }}
                        icon={volume}
                        //mode="contained"
                        onPress={() => console.log('Pressed soundBig')}
                    />
                </View>
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
    )}

const styles = StyleSheet.create({
    map: {
        height: '50%',
        width: '50%',
    },
    slider: {
        marginTop: 450,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginTop: 10,
        color: '#626262',
    },
    time: {
        marginTop: 13,
        fontSize: 10,
        color: '#626262',
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonStyle: {
        marginHorizontal: 8,
        // borderRadius: 100,
        // marginTop: 575,
        marginTop: 55,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // iconStyle: {
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
});