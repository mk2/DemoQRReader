import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Text } from 'react-native';
import { CameraScreen } from 'react-native-camera-kit';

export const RNCKCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (event: any) => {
    setScanned(true);
    Alert.alert(`Bar code with ${event.nativeEvent.codeStringValue} scanned.`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <CameraScreen
        scanBarcode={true}
        onReadCode={scanned ? () => {} : handleBarCodeScanned}
        cameraRatioOverlay={undefined}
        captureButtonImage={undefined}
        cameraFlipImage={undefined}
        hideControls={undefined}
        showFrame={true}
        laserColor={undefined}
        frameColor={undefined}
        torchOnImage={undefined}
        torchOffImage={undefined}
        onBottomButtonPressed={() => {}}
        captureButtonImageStyle={{}}
        cameraFlipImageStyle={{}}
        torchImageStyle={{}}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </>
  );
};
