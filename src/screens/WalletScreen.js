import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// static data
import transHistory from '../library/const/TransHistory';
import upcomingBills from '../library/const/UpcomingBills';
// svgs
import BellIcon from '../assets/images/Icon/bell.svg';
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import AddIcon from '../assets/images/Icon/add.svg';
import QrIcon from '../assets/images/Icon/qr.svg';
import PaperPlaneIcon from '../assets/images/Icon/paperPlane.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const WalletScreen = ({navigation}) => {
  const [screen, setScreen] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.topBgContainer}>
        <View>
          <ImageBackground
            style={styles.topBgImg}
            source={require('../assets/images/topBg.png')}>
            <View style={styles.greetContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevLeftLightIcon width={28} />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>Wallet</Text>
              </View>
              <TouchableOpacity style={styles.bellIcon}>
                <BellIcon />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      {/* header */}

      {/* main */}
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.totalBalanceText}>Total Balance</Text>
          <Text style={styles.total}>$2548.00</Text>
        </View>
        <View style={styles.options_Container}>
          <View style={styles.option_Container}>
            <TouchableOpacity
              onPressIn={() => navigation.navigate('AddExpense')}
              style={styles.optionContainer}>
              <AddIcon />
            </TouchableOpacity>
            <Text style={styles.optionText}>Add</Text>
          </View>
          <View style={styles.option_Container}>
            <TouchableOpacity
              onPressIn={() => navigation.navigate('ConnectWallet')}
              style={styles.optionContainer}>
              <QrIcon />
            </TouchableOpacity>
            <Text style={styles.optionText}>Pay</Text>
          </View>
          <View style={styles.option_Container}>
            <TouchableOpacity style={styles.optionContainer}>
              <PaperPlaneIcon />
            </TouchableOpacity>
            <Text style={styles.optionText}>Send</Text>
          </View>
        </View>
        {/* Filter start */}

        <View style={styles.filterContainer}>
          <TouchableOpacity
            onPressIn={() => setScreen('1')}
            style={
              screen === '1'
                ? [styles.filter, {backgroundColor: COLOR.white}]
                : styles.filter
            }>
            <Text style={styles.filterText}>Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => setScreen('2')}
            style={
              screen === '2'
                ? [styles.filter, {backgroundColor: COLOR.white}]
                : styles.filter
            }>
            <Text style={styles.filterText}>Upcoming Bills</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.filteredData}>
          {screen === '1' ? (
            <View style={styles.transListContainer}>
              {transHistory.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      /* 1. Navigate to the Details route with params */
                      navigation.navigate('Transaction', {
                        item: item,
                      });
                    }}
                    key={index}
                    style={styles.transList}>
                    <View style={styles.transLeft}>
                      <View style={styles.transImgContainer}>
                        <Image
                          style={item.color == 'red' && styles.transImg}
                          source={item.image}
                        />
                      </View>
                      <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.dateSecondary}</Text>
                      </View>
                    </View>
                    <View>
                      <Text
                        style={
                          item.color == 'red'
                            ? [styles.amount, {color: COLOR.red}]
                            : [styles.amount, {color: COLOR.parrot}]
                        }>
                        {item.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View style={styles.transListContainer}>
              {upcomingBills.map((item, index) => {
                return (
                  <View key={index} style={styles.transList}>
                    <View style={styles.transLeft}>
                      <View style={styles.transImgContainer}>
                        <Image source={item.image} />
                      </View>
                      <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.payBtn}
                        onPress={() => {
                          /* 1. Navigate to the Details route with params */
                          navigation.navigate('BillDetails', {
                            item: item,
                          });
                        }}>
                        <Text style={styles.payBtnText}>Pay</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>

        {/* Filter end */}
      </View>
      {/* main */}

      {/* bottomNav */}
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Home');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Statistics');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/bar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Wallet');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/walletFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/user.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* bottomNav */}
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  payBtnText: {
    fontSize: fontPixel(16),
    color: COLOR.parrot,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.64),
  },
  payBtn: {
    width: pixelSizeVertical(100),
    height: pixelSizeVertical(36),
    backgroundColor: '#ECF9F8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(40),
  },
  filteredData: {
    paddingHorizontal: pixelSizeVertical(26),
    marginTop: pixelSizeVertical(20),
  },
  amount: {
    fontSize: fontPixel(18),
    // color: COLOR.parrot,
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.72),
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  date: {
    fontSize: fontPixel(13),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.26),
    opacity: 0.6,
  },
  title: {
    fontSize: fontPixel(16),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.32),
  },
  transImgContainer: {
    padding: pixelSizeVertical(10),
    backgroundColor: COLOR.transImageClr,
    borderRadius: 8,
    height: pixelSizeVertical(50),
    width: pixelSizeVertical(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transImg: {
    height: pixelSizeVertical(35),
    width: pixelSizeVertical(35),
  },
  transLeft: {
    flexDirection: 'row',
    gap: 9,
  },
  transList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  transListContainer: {
    marginTop: pixelSizeVertical(16),
    gap: 16,
  },
  filterText: {
    fontSize: fontPixel(14),
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interRegular,
    textAlign: 'center',
  },
  filter: {
    width: widthPixel(180),
    height: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(40),
    // backgroundColor: COLOR.white,
  },
  filterContainer: {
    width: widthPixel(374),
    height: widthPixel(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: pixelSizeVertical(20),
    backgroundColor: COLOR.light,
    borderRadius: widthPixel(40),
    marginTop: pixelSizeVertical(46),
    paddingHorizontal: pixelSizeVertical(8),
    paddingVertical: pixelSizeVertical(4),
  },
  optionText: {
    fontSize: fontPixel(14),
    color: COLOR.extremeDark,
    fontFamily: FONT_FAMILY.interRegular,
    textAlign: 'center',
  },
  optionContainer: {
    width: widthPixel(60),
    height: widthPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeVertical(10),
    borderColor: COLOR.borderGreen,
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(80),
  },
  option_Container: {
    gap: pixelSizeVertical(8),
  },
  options_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: pixelSizeVertical(30),
    marginTop: pixelSizeVertical(30),
  },
  total: {
    fontSize: fontPixel(30),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interBold,
    letterSpacing: fontPixel(-1.5),
    textAlign: 'center',
    marginTop: pixelSizeVertical(5),
  },
  totalBalanceText: {
    fontSize: fontPixel(16),
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.32),
    textAlign: 'center',
  },
  mainContainer: {
    width: widthPixel(414),
    height: widthPixel(731),
    backgroundColor: COLOR.white,
    elevation: 1,
    marginTop: pixelSizeVertical(-125),
    borderTopRightRadius: pixelSizeVertical(30),
    borderTopLeftRadius: pixelSizeVertical(30),
    paddingTop: pixelSizeVertical(45),
  },
  bellIcon: {
    padding: pixelSizeVertical(8.333),
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  headerIcon: {
    width: widthPixel(28),
    height: widthPixel(28),
  },
  headerText: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(18),
    color: COLOR.white,
  },
  greetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: pixelSizeVertical(24),
  },
  topBgImg: {
    paddingTop: pixelSizeVertical(74),
    width: widthPixel(414),
    height: widthPixel(287),
  },
  topBgContainer: {
    elevation: -10,
  },
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },

  bottomTabImg: {
    height: pixelSizeVertical(32),
    width: pixelSizeVertical(32),
  },
  bottomTab: {
    // width: pixelSizeVertical(439),
    height: pixelSizeVertical(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(22),
    borderRadius: 1,
    // backgroundColor: COLOR.red,
  },
  bottomTabContainer: {
    backgroundColor: COLOR.white,
    elevation: 9,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
