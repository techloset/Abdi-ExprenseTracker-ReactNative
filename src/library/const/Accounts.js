import BankIcon from '../../assets/images/Icon/bank.svg';
import CheckIcon from '../../assets/images/Icon/checkFill.svg';
import PaypalIcon from '../../assets/images/Icon/paypal.svg';
import CurrencyIcon from '../../assets/images/Icon/currency.svg';

const accounts = [
  {
    svg: <BankIcon width={36} />,
    title: 'Bank Link',
    desc: 'Connect your bank          account to deposit & fund',
    checkIcon: <CheckIcon />,
  },
  {
    svg: <CurrencyIcon width={36} />,
    title: 'Microdeposits',
    desc: 'Connect bank in 5-7 days',
    checkIcon: <CheckIcon />,
  },
  {
    svg: <PaypalIcon width={36} />,
    title: 'Paypal',
    desc: 'Connect you paypal account',
    checkIcon: <CheckIcon />,
  },
];

export default accounts;
