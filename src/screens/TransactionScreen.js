import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// svgs
import DotsIcon from '../assets/images/Icon/dots.svg';
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import ChevUpDarkIcon from '../assets/images/Icon/chevUpDark.svg';
import SimpleBtn from '../component/SimpleBtn';
import SCREENS from '../library/const/SCREENS';
import WalletScreenBottomTab from '../component/WalletScreenBottomTab';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const TransactionScreen = ({navigation, route}) => {
  const {item} = route.params;

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
                <Text style={styles.headerText}>Transaction Details</Text>
              </View>
              <TouchableOpacity>
                <DotsIcon />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      {/* header */}

      {/* main */}
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={item.id === '2' ? {alignSelf: 'center'} : styles.itemImage}>
            <Image source={item.image} />
          </View>
          <View style={styles.statusOval}>
            <Text
              style={
                item.color === 'red'
                  ? [styles.statusOvalText, {color: COLOR.red}]
                  : styles.statusOvalText
              }>
              {item.status}
            </Text>
          </View>
          <View style={styles.totalTop}>
            <Text style={styles.totalTopText}>{item.total}</Text>
          </View>
          <View style={styles.transHeader}>
            <Text style={styles.transText}>Transaction Details</Text>
            <View>
              <ChevUpDarkIcon width={20} />
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.leftText}>Status</Text>
              <Text
                style={
                  item.color === 'red'
                    ? [styles.statusText, {color: COLOR.red}]
                    : styles.statusText
                }>
                {item.status}
              </Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.leftText}>
                {item.color === 'red' ? 'To' : 'From'}
              </Text>
              <Text style={styles.rightText}>{item.name}</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.leftText}>Time</Text>
              <Text style={styles.rightText}>{item.time}</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.leftText}>Date</Text>
              <Text style={styles.rightText}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.leftText}>
                {item.color === 'red' ? 'Earnings' : 'Spending'}
              </Text>
              <Text style={styles.rightText}>{item.total}</Text>
            </View>
            <View style={styles.option}>
              <Text style={styles.leftText}>Fee</Text>
              <Text style={styles.rightText}>{item.fee}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Text style={styles.leftTextTotal}>Date</Text>
              <Text style={styles.rightTextTotal}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <SimpleBtn
              navigation={navigation}
              btnTextData={'Download Receipt'}
              target={SCREENS.WALLET}
            />
          </View>
        </ScrollView>
      </View>
      {/* main */}

      {/* bottomNav */}
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          {WalletScreenBottomTab.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.paddingTen}
                onPress={() => {
                  navigation.navigate(item.target);
                }}>
                {item.svg}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* bottomNav */}
    </SafeAreaView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  scrollView: {
    paddingBottom: pixelSizeVertical(150),
    paddingTop: pixelSizeVertical(22),
  },
  buttonContainer: {
    marginTop: pixelSizeVertical(35),
  },
  rightTextTotal: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.black,
    letterSpacing: fontPixel(-0.32),
  },
  leftTextTotal: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.lowDark,
    letterSpacing: fontPixel(-0.32),
  },
  line: {
    width: widthPixel(354),
    height: widthPixel(1),
    backgroundColor: COLOR.borderLight,
    marginVertical: pixelSizeVertical(17),
    alignSelf: 'center',
  },
  rightText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
    color: COLOR.black,
    letterSpacing: fontPixel(-0.32),
  },
  statusText: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.green,
    letterSpacing: fontPixel(-0.32),
  },
  leftText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
    color: COLOR.lowDark,
    letterSpacing: fontPixel(-0.32),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsContainer: {
    marginHorizontal: pixelSizeVertical(30),
    gap: pixelSizeVertical(9),
  },
  transText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(18),
    color: COLOR.black,
    letterSpacing: fontPixel(-0.36),
  },
  transHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeVertical(30),
    alignItems: 'center',
    marginTop: pixelSizeVertical(33),
    marginBottom: pixelSizeVertical(17),
  },
  totalTopText: {
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(24),
    letterSpacing: fontPixel(-0.96),
  },
  totalTop: {
    marginTop: pixelSizeVertical(8),
    alignSelf: 'center',
  },
  statusOvalText: {
    color: COLOR.green,
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(14),
    letterSpacing: fontPixel(-0.7),
  },
  statusOval: {
    marginTop: pixelSizeVertical(12),
    alignSelf: 'center',
    width: widthPixel(80),
    height: widthPixel(25),
    backgroundColor: COLOR.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(80),
  },
  itemImage: {
    alignSelf: 'center',
    width: widthPixel(80),
    height: widthPixel(80),
    backgroundColor: COLOR.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(80),
  },
  mainContainer: {
    width: widthPixel(414),
    height: widthPixel(731),
    backgroundColor: COLOR.white,
    elevation: 1,
    marginTop: pixelSizeVertical(-125),
    borderTopRightRadius: pixelSizeVertical(30),
    borderTopLeftRadius: pixelSizeVertical(30),
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
    height: pixelSizeVertical(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(22),
    borderRadius: 1,
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
