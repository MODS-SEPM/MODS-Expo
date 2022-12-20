import React from 'react'
import { Provider } from 'react-native-paper'
import {createAppContainer } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  MapScreen,
  QRScreen,
  AudioScreen,
  CameraScreen,
  ModsScreen,
  SettingsScreen
} from './src/screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Content() {
  return (
      <Tab.Navigator
          screenOptions={ ({route}) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Map') {
                      iconName = focused ? 'navigate' : 'navigate-outline';
                  } else if (route.name === 'QR Code') {
                      iconName = focused ? 'qr-code' : 'qr-code-outline';
                  } else if (route.name === 'Audio Guide') {
                      iconName = focused ? 'headset' : 'headset-outline';
                  } else if (route.name === 'Camera') {
                      iconName = focused ? 'camera' : 'camera-outline';
                  } else if (route.name === 'Mods') {
                      iconName = focused ? 'cube' : 'cube-outline';
                  } else if (route.name === 'Settings') {
                      iconName = focused ? 'settings' : 'settings-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color}/>;
              },
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

      })}>
        <Tab.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
        <Tab.Screen name='QR Code' component={QRScreen} options={{headerShown: false}} />
        <Tab.Screen name='Audio Guide' component={AudioScreen} options={{headerShown: false}} />
        <Tab.Screen name='Camera' component={CameraScreen} options={{headerShown: false}} />
        <Tab.Screen name='Mods' component={ModsScreen} options={{headerShown: false}} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{headerShown: false}} />

      </Tab.Navigator>
  );
}

export default function App() {
    return (
        <Provider theme={theme}>

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='StartScreen'
                screenOptions={{ headerShown: false, }}
                >
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                <Stack.Screen
                    name='MapScreen'
                    component={Content}
                />
            </Stack.Navigator>
        </NavigationContainer>

        </Provider>
)}