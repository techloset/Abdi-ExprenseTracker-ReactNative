import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NAVIGATION from '../library/const/NAVIGATION';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
      {/* <Stack.Screen name={SCREENS.ONBOARDING} component={OnboardingScreen} /> */}
      {NAVIGATION.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.screenName}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigation;
