import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '../screen/detail';
import FilterScreen from '../screen/filter/filter';
import {FormLogin} from '../screen/auth';
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={FormLogin} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
