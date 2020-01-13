import {TextInput, View} from 'react-native';
import React from 'react';

const ResponsiveCentered = ({children}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 0.1}} />
      <View style={{flex: 0.8}}>{children}</View>
      <View style={{flex: 0.1}} />
    </View>
  );
};

export default ResponsiveCentered;
