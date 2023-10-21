import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';

//Screen names

const Tab = createBottomTabNavigator();

function BottommTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Statistics'} component={StatisticsScreen} />
      <Tab.Screen name={'Wallet'} component={WalletScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottommTabNavigator;
