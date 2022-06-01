/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ExpoCameraScreen } from './expo/ExpoCameraScreen';
import { Launcher } from './Launcher';
import { RNCKCameraScreen } from './rnck/RNCKCameraScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launcher">
        <Stack.Screen name="Launcher" component={Launcher} />
        <Stack.Screen name="ExpoCamera" component={ExpoCameraScreen} />
        <Stack.Screen name="RNCKCamera" component={RNCKCameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
