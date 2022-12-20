import React, {useState} from 'react';
import Background from '../components/Background'
import {Dimensions, Text, View, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';
import Button from "../components/Button";
import Checkbox from 'expo-checkbox';
import {theme} from "../core/theme";


export default function SettingsScreen({ navigation }) {
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(true);
    const [isChecked5, setChecked5] = useState(true);
    const [isChecked6, setChecked6] = useState(false);

    return (
    <Background>

        <View style={styles.container}>

            <View style={styles.contentContainer}>

                <Text style={{marginTop:50, textAlign:'left', fontSize:25, fontWeight:'bold'}}>Selections</Text>


                <Text style={{marginTop:15, marginLeft:25,textAlign:'left', fontSize:20, fontWeight:'bold'}}>Your Food Preferences</Text>


                 <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:15, marginLeft:25,textAlign:'left', fontSize:20,}}>Vegetarian</Text>
                     <Checkbox
                      style={{marginTop: 18, marginLeft: 78}}
                      value={isChecked1}
                      onValueChange={setChecked1}
                      color={isChecked1 ? '#f3b344' : undefined}
                    />
                </View>

                <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:10, marginLeft:25,textAlign:'left', fontSize:20,}}>Vegan</Text>
                     <Checkbox
                      style={{marginTop: 13, marginLeft: 116}}
                      value={isChecked2}
                      onValueChange={setChecked2}
                      color={isChecked2 ? '#f3b344' : undefined}
                    />
                </View>

                <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:10, marginLeft:25,textAlign:'left', fontSize:20,}}>Nut Allergy</Text>
                     <Checkbox
                      style={{marginTop: 13, marginLeft: 75}}
                      value={isChecked3}
                      onValueChange={setChecked3}
                      color={isChecked3 ? '#f3b344' : undefined}
                    />
                </View>

                <Text style={{marginTop:30, marginLeft:25,textAlign:'left', fontSize:20, fontWeight:'bold'}}>Permissions</Text>

                <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:10, marginLeft:25,textAlign:'left', fontSize:20,}}>Map</Text>
                     <Checkbox
                      style={{marginTop: 13, marginLeft: 130}}
                      value={isChecked4}
                      onValueChange={setChecked4}
                      color={isChecked4 ? '#f3b344' : undefined}
                    />
                </View>

                <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:10, marginLeft:25,textAlign:'left', fontSize:20,}}>Camera</Text>
                     <Checkbox
                      style={{marginTop: 13, marginLeft: 100}}
                      value={isChecked5}
                      onValueChange={setChecked5}
                      color={isChecked5 ? '#f3b344' : undefined}
                    />
                </View>

                <Text style={{marginTop:30, marginLeft:25,textAlign:'left', fontSize:20, fontWeight:'bold'}}>Appearance</Text>

                <View style={{ flexDirection: "row"}}>
                    <Text style={{marginTop:10, marginLeft:25,textAlign:'left', fontSize:20,}}>Dark Mode</Text>
                     <Checkbox
                      style={{marginTop: 13, marginLeft: 72}}
                      value={isChecked6}
                      onValueChange={setChecked6}
                      color={isChecked6 ? '#f3b344' : undefined}
                    />
                </View>

            </View>

            </View>

            <View style={styles.footer}>
                <Button
                    mode="outlined"
                    onPress={() =>
                        navigation.reset({
                        index: 0,
                        routes: [{ name: 'StartScreen' }],
                      })
                    }
                >
                    Logout
                </Button>
            </View>
    </Background>



    );

}
const styles = StyleSheet.create({
  container: {
        flex: 1,
    },

    contentContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        marginLeft: 50
    },
    footer: {
        height: 100
    },
    options: {
        flex: 66,
        width: 20,
        resizeMode: "contain",
        marginLeft: 20,
    },

});
