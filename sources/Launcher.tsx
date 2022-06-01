import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';

export const Launcher = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Expo"
        onPress={() => {
          (navigation.navigate as any)('ExpoCamera');
        }}
      />
    </View>
  );
};
