import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useLocationStore} from '../hook/useLocationStore';
import {MapComponent} from '../components';

const MapScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    // return <LoadingComponent size={40} />
    return <ActivityIndicator size={40} color="red" />;
  }

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <MapComponent initialLocation={lastKnownLocation} />
    </View>
  );
};

export default MapScreen;
