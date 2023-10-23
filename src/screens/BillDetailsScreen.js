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
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// svgs
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import DotsIcon from '../assets/images/Icon/dots.svg';
import DebitCardIcon from '../assets/images/Icon/creditCard.svg';
import BooleanFillIcon from '../assets/images/Icon/booleanFill.svg';
import BooleanIcon from '../assets/images/Icon/boolean.svg';
import PaypalIcon from '../assets/images/Icon/paypal.svg';
import GradientBtn from '../component/GradientBtn';
import SCREENS from '../library/const/SCREENS';
import WalletScreenBottomTab from '../component/WalletScreenBottomTab';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const BillDetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [radio, setRadio] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.topBgContainer}>
        <ImageBackground
          style={styles.topBgImg}
          source={require('../assets/images/topBg.png')}>
          <View style={styles.greetContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ChevLeftLightIcon />
            </TouchableOpacity>
            <Text style={styles.headerText}>Bill Details</Text>
            <TouchableOpacity>
              <DotsIcon />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/* header */}
      {/* main */}
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.heroContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleFull}>{item.titleFull}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.leftText}>Price</Text>
              <Text style={styles.rightText}>{item.price}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.leftText}>Fee</Text>
              <Text style={styles.rightText}>{item.fee}</Text>
            </View>
          </View>
          <View style={styles.line}></View>

          <View style={styles.info}>
            <Text style={styles.leftTextTotal}>Total</Text>
            <Text style={styles.rightTextTotal}>{item.total}</Text>
          </View>

          {/* options */}

          <View style={styles.optionsContainer}>
            <Text style={styles.heading}>Select payment method</Text>
            <TouchableOpacity
              onPress={() => setRadio(1)}
              style={radio == 1 ? styles.optionGreen : styles.option}>
              <View style={styles.optionLeft}>
                <DebitCardIcon />
                <Text
                  style={
                    radio == 1 ? styles.optionGreenText : styles.optionText
                  }>
                  Debit Card
                </Text>
              </View>
              {radio == 1 ? (
                <BooleanFillIcon width={20} />
              ) : (
                <BooleanIcon width={20} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRadio(2)}
              style={radio !== 1 ? styles.optionGreen : styles.option}>
              <View style={styles.optionLeft}>
                <PaypalIcon />
                <Text
                  style={
                    radio !== 1 ? styles.optionGreenText : styles.optionText
                  }>
                  Paypal
                </Text>
              </View>
              {radio !== 1 ? (
                <BooleanFillIcon width={20} />
              ) : (
                <BooleanIcon width={20} />
              )}
            </TouchableOpacity>
          </View>
          {/* options */}

          <GradientBtn
            navigation={navigation}
            btnTextData={'Pay Now'}
            target={SCREENS.BILL_PAYMENT}
            param={{
              item: item,
            }}
          />
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

export default BillDetailsScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  optionText: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.lowDark,
  },
  optionGreenText: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.green,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(15),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(344),
    height: widthPixel(90),
    backgroundColor: COLOR.light,
    paddingHorizontal: pixelSizeVertical(20),
    borderRadius: widthPixel(20),
    alignSelf: 'center',
  },
  optionGreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(344),
    height: widthPixel(90),
    backgroundColor: COLOR.lightGreen,
    paddingHorizontal: pixelSizeVertical(20),
    borderRadius: widthPixel(20),
    alignSelf: 'center',
  },
  heading: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(18),
    color: COLOR.black,
    letterSpacing: fontPixel(-0.36),
    marginBottom: pixelSizeVertical(5),
  },
  optionsContainer: {
    marginTop: pixelSizeVertical(40),
    gap: pixelSizeVertical(15),
    marginBottom: pixelSizeVertical(30),
  },
  line: {
    width: widthPixel(354),
    height: widthPixel(1),
    backgroundColor: COLOR.borderLight,
    marginVertical: pixelSizeVertical(17),
    alignSelf: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  rightText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
    color: COLOR.black,
    letterSpacing: fontPixel(-0.32),
  },
  leftText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
    color: COLOR.lowDark,
    letterSpacing: fontPixel(-0.32),
  },
  infoContainer: {
    marginTop: pixelSizeVertical(40),
    gap: pixelSizeVertical(12),
  },
  date: {
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interRegular,
    fontSize: fontPixel(14),
    letterSpacing: fontPixel(-0.28),
  },
  titleFull: {
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(18),
    letterSpacing: fontPixel(-0.36),
  },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(15),
  },
  imageContainer: {
    width: widthPixel(80),
    height: widthPixel(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    borderRadius: widthPixel(80),
  },
  image: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  scroll: {
    padding: pixelSizeVertical(30),
    paddingBottom: pixelSizeVertical(170),
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
