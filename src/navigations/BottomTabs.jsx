import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home';
import ChatScreen from '../screen/chat/ChatScreen';
import NotificationScreen from '../screen/notification/NotificationScreen';
import NetworkScreen from '../screen/network/NetworkScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterScreen from '../screen/filter/filter';
import Detail from '../screen/detail';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // position: 'absolute',
          marginBottom: 15,
          marginHorizontal: 15,
          elevation: 0,
          backgroundColor: '#e7e9ec',
          borderRadius: 18,
          height: 70,
        },
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: '#4cafbe',
        tabBarItemStyle: {padding: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={FilterScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="message1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Detail}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Network"
        component={NetworkScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="account-group-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
