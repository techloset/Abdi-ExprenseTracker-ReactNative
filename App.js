import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation';

const Stack = createNativeStackNavigator();
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
