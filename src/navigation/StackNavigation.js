import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ConnectWalletScreen from '../screens/ConnectWalletScreen';
import TransactionScreen from '../screens/TransactionScreen';
import BillDetailsScreen from '../screens/BillDetailsScreen';
import BillPaymentScreen from '../screens/BillPaymentScreen';
import BillPaymentDoneScreen from '../screens/BillPaymentDoneScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="BillDetails" component={BillDetailsScreen} />
        <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
        <Stack.Screen
          name="BillPaymentDone"
          component={BillPaymentDoneScreen}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
