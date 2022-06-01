import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export const Launcher = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'space-around' }}>
      <Button
        title="Expo"
        onPress={() => {
          (navigation.navigate as any)('ExpoCamera');
        }}
      />
      <Button
        title="ReactNativeCameraKit"
        onPress={() => {
          (navigation.navigate as any)('RNCKCamera');
        }}
      />
      <Button
        title="ReactNativeiVisionCamera"
        onPress={() => {
          (navigation.navigate as any)('RNVCCamera');
        }}
      />
    </View>
  );
};
