import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '../screen/detail';
import FilterScreen from '../screen/filter/filter';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='BottomTabs' screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
}

export default RootStack