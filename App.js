import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {theme} from './src/assets/theme/theme';
import {SafeAreaView} from 'react-native';
import RootStack from './src/navigations/RootStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <RootStack />
          </Provider>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
