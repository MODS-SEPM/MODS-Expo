import Background from "../components/Background";
import React from "react";
import Header from '../components/Header'
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";

export default function ModsScreen() {
    return (
        <Background>
            <View style={styles.container}>
                <View style={{ flex: 2, marginTop: 26 }}>
                    <Header>
                        Mods
                    </Header>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/filter.png')} style={styles.filter}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/menu.png')} style={styles.menu}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Skate</Text>
                            <Text style={styles.modDescription}>Check out spots all over Vienna</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Movie</Text>
                            <Text style={styles.modDescription}>Explore all the movie scenes in Vienna</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Mod title</Text>
                            <Text style={styles.modDescription}>some description about the mod</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Mod title</Text>
                            <Text style={styles.modDescription}>some description about the mod</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Mod title</Text>
                            <Text style={styles.modDescription}>some description about the mod</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listItem}>
                    <View style={{ flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/logo.png')} style={styles.logo}/>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.modTitle}>Mod title</Text>
                            <Text style={styles.modDescription}>some description about the mod</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../assets/options.png')} style={styles.options}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Background>
    ) }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filter: {
        width: 20,
        height: 20,
        marginLeft: 80,
        marginRight: 150,
    },
    menu: {
        width: 20,
        height: 20,
        marginLeft: 150,
        marginRight: 80,
    },
    modTitle: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    modDescription: {
        justifyContent: 'center',
        fontSize: 15,
        color: '#fff',
    },
    listItem: {
        flex: 1,
        padding: 14,
        margin: 10
    },
    logo: {
        flex: 6,
        // height: 150,
        width: 100,
        resizeMode: "contain",
        marginLeft: -40,
        // marginTop: 1
    },
    options: {
        flex: 66,
        width: 20,
        resizeMode: "contain",
        marginLeft: 20,
    }
});
