import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import Detail_First from './detail_first';
import {SafeAreaView} from 'react-native';
const Detail = () => {
  return (
    <SafeAreaView>
      <Detail_First />
    </SafeAreaView>
  );
};

export default Detail;
