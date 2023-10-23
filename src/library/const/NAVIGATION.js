import HomeScreen from '../../screens/HomeScreen';
import OnboardingScreen from '../../screens/OnboardingScreen';
import StatisticsScreen from '../../screens/StatisticsScreen';
import WalletScreen from '../../screens/WalletScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import AddExpenseScreen from '../../screens/AddExpenseScreen';
import ConnectWalletScreen from '../../screens/ConnectWalletScreen';
import TransactionScreen from '../../screens/TransactionScreen';
import BillDetailsScreen from '../../screens/BillDetailsScreen';
import BillPaymentScreen from '../../screens/BillPaymentScreen';
import BillPaymentDoneScreen from '../../screens/BillPaymentDoneScreen';
import SCREENS from './SCREENS';

const NAVIGATION = [
  {
    screenName: SCREENS.ONBOARDING,
    component: OnboardingScreen,
  },
  {
    screenName: SCREENS.HOME,
    component: HomeScreen,
  },
  {
    screenName: SCREENS.STATISTICS,
    component: StatisticsScreen,
  },
  {
    screenName: SCREENS.WALLET,
    component: WalletScreen,
  },
  {
    screenName: SCREENS.PROFILE,
    component: ProfileScreen,
  },
  {
    screenName: SCREENS.ADD_EXPENSE,
    component: AddExpenseScreen,
  },
  {
    screenName: SCREENS.CONNECT_WALLET,
    component: ConnectWalletScreen,
  },
  {
    screenName: SCREENS.TRANSACTION,
    component: TransactionScreen,
  },
  {
    screenName: SCREENS.BILL_DETAILS,
    component: BillDetailsScreen,
  },
  {
    screenName: SCREENS.BILL_PAYMENT,
    component: BillPaymentScreen,
  },
  {
    screenName: SCREENS.BILL_PAYMENT_DONE,
    component: BillPaymentDoneScreen,
  },
];

export default NAVIGATION;
