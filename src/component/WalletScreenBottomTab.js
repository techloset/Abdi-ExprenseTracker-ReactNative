import HomeIcon from '../assets/images/Icon/home.svg';
import StatisticIcon from '../assets/images/Icon/stats.svg';
import WalletFillIcon from '../assets/images/Icon/walletFill.svg';
import ProfileIcon from '../assets/images/Icon/profile.svg';
// static
import SCREENS from '../library/const/SCREENS';

const WalletScreenBottomTab = [
  {
    svg: <HomeIcon width={35} />,
    target: SCREENS.HOME,
  },
  {
    svg: <StatisticIcon width={35} />,
    target: SCREENS.STATISTICS,
  },
  {
    svg: <WalletFillIcon width={35} />,
    target: SCREENS.WALLET,
  },
  {
    svg: <ProfileIcon width={35} />,
    target: SCREENS.PROFILE,
  },
];

export default WalletScreenBottomTab;
