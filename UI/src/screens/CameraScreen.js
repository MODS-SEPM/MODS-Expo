// import Background from "../components/Background";
// import React, { useState, useRef, useEffect } from "react";
// import { Button, StyleSheet, Text, Alert, View } from 'react-native';
// import Header from '../components/Header'
// import { StatusBar } from 'expo-status-bar';
// import { Camera } from 'expo-camera';
// import { shareAsync } from 'expo-sharing';
// import * as MediaLibrary from 'expo-media-library';

import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

//     let cameraRef = useRef();
//   const [hasCameraPermission, setHasCameraPermission] = useState();
//   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
//   const [photo, setPhoto] = useState();
//
//   useEffect(() => {
//     (async () => {
//       const cameraPermission = await Camera.requestCameraPermissionsAsync();
//       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
//       setHasCameraPermission(cameraPermission.status === "granted");
//       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
//     })();
//   }, []);
//
//   if (hasCameraPermission === undefined) {
//     return <Text>Requesting permissions...</Text>
//   } else if (!hasCameraPermission) {
//     return <Text>Permission for camera not granted. Please change this in settings.</Text>
//   }
//
//   let takePic = async () => {
//     let options = {
//       quality: 1,
//       base64: true,
//       exif: false
//     };
//
//     let newPhoto = await cameraRef.current.takePictureAsync(options);
//     setPhoto(newPhoto);
//   };
//
//   if (photo) {
//     let sharePic = () => {
//       shareAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       });
//     };
//
//     let savePhoto = () => {
//       MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
//         setPhoto(undefined);
//       });
//     };
//
//     return (
//       <SafeAreaView style={styles.container}>
//         <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
//         <Button title="Share" onPress={sharePic} />
//         {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
//         <Button title="Discard" onPress={() => setPhoto(undefined)} />
//       </SafeAreaView>
//     );
//   }
//
//   return (
//     <Camera style={styles.container} ref={cameraRef}>
//       <View style={styles.containerMain}>
//       <View style={styles.bottomView}>
//         <Button title="Take Pic" onPress={takePic} />
//       </View>
//       <StatusBar style="auto" />
//         </View>
//     </Camera>
//   );
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

// const styles = StyleSheet.create({
//   camera: {
//     ...StyleSheet.absoluteFillObject,
//   },
//     fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     position: 'absolute',
//   },
//   bottomView: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#EE5407',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute', //Here is the trick
//     bottom: 0, //Here is the trick
//   },
//     containerMain: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
