import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import BottomTabs from './BottomTabs';
import Detail from '../screen/detail';
import FilterScreen from '../screen/filter/filter';
import { LogIn } from '../screen/Auth/Login';
import Home from '../screen/home';
import { getTokenOnKeychain } from '../services/keychain';

const Stack = createStackNavigator();

function RootStack() {
  let dataAuth = useSelector(state => state.auth)
  getTokenOnKeychain()

  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{ headerShown: false }}
    >
      {
        !dataAuth.token == "" ?
          <Stack.Group initialRouteName="BottomTabs">
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="FilterScreen" component={FilterScreen} />
          </Stack.Group>
          : <Stack.Screen name="LogIn" component={LogIn} />}
    </Stack.Navigator>
  );
}

export default RootStack;
