import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const AuthLogoComponent = ({src, onPress}: {src: any; onPress: any}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={src} />
    </TouchableOpacity>
  );
};

export default AuthLogoComponent;
