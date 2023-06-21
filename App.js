import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/assets/theme/theme';
import BottomTabs from './src/navigations/BottomTabs';
import {SafeAreaView} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import RootStack from './src/navigations/RootStack';

const App = () => {
  const navigationRef = useRef(null);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
