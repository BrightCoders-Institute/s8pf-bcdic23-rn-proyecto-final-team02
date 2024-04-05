import {Platform, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {Location} from '../interface/location';
import {useLocationStore} from '../hook/useLocationStore';

import {FabComponent} from '.';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

const MapComponent = ({showsUserLocation = true, initialLocation}: Props) => {
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>(initialLocation);
  const [isFollowingUser, setIsFollowingUser] = useState(true);

  const {getLocation, lastKnownLocation, watchLocation, clearWatchLocation} =
    useLocationStore();

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: location,
      zoom: 18,
      pitch: 20,
    });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) {
      moveCameraToLocation(initialLocation);
    }
    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  useEffect(() => {
    watchLocation();

    return () => {
      clearWatchLocation();
    };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={map => (mapRef.current = map!)}
        showsUserLocation={showsUserLocation}
        showsMyLocationButton={false}
        showsCompass={false}
        onTouchStart={() => setIsFollowingUser(false)}
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}></MapView>

      {isFollowingUser == false ? (
        <FabComponent
          iconName="locate"
          styles={
            Platform.OS === 'ios' ? styles.positionIos : styles.positionAndroid
          }
          iconSize={30}
          onPress={() => setIsFollowingUser(true)}
        />
      ) : (
        <FabComponent
          iconName="locate"
          styles={
            Platform.OS === 'ios' ? styles.positionIos : styles.positionAndroid
          }
          iconSize={30}
          onPress={moveToCurrentLocation}
        />
      )}
    </>
  );
};

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  positionIos: {
    bottom: 100,
    right: 20,
  },
  positionAndroid: {
    bottom: 70,
    right: 20,
  },
});

export default MapComponent;
