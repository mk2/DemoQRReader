import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { BarcodeFormat, useScanBarcodes } from 'vision-camera-code-scanner';

export const RNVCCameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  useEffect(() => {
    (async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
      setHasPermission(newCameraPermission === 'authorized');
    })();
  }, []);

  useEffect(() => {
    console.log(barcodes);
  }, [barcodes]);

  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return <Text>No camera devices</Text>;
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  );
};
