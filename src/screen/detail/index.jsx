import React from 'react';
import {NativeBaseProvider, Text, Box, ScrollView} from 'native-base';
import Detail_First from './detail_first';
import {SafeAreaView} from 'react-native';
import DetailSecond from './detail_second';
const Detail = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <Detail_First />
      <DetailSecond />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
