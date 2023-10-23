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
import GradientBtn from '../component/GradientBtn';
import SCREENS from '../library/const/SCREENS';
import WalletScreenBottomTab from '../component/WalletScreenBottomTab';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const BillPaymentScreen = ({navigation, route}) => {
  const {item} = route.params;

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
            <Text style={styles.headerText}>Bill Payment</Text>
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
          {/* hero */}
          <View style={styles.heroContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>
            <Text style={styles.descText}>
              You will pay{' '}
              <Text
                style={{
                  color: COLOR.green,
                  fontFamily: FONT_FAMILY.interSemiBold,
                }}>
                {item.titleFull}
              </Text>{' '}
              for one month with BCA OneKlik
            </Text>
          </View>
          {/* hero */}

          {/* info */}
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
          <View style={{marginBottom: pixelSizeVertical(200)}}>
            <View style={styles.info}>
              <Text style={styles.leftTextTotal}>Total</Text>
              <Text style={styles.rightTextTotal}>{item.total}</Text>
            </View>
          </View>
          {/* info */}

          <GradientBtn
            navigation={navigation}
            btnTextData={'Confirm and Pay'}
            target={SCREENS.BILL_PAYMENT_DONE}
            param={{
              item: item,
            }}
          />
        </ScrollView>
      </View>
      {/* main */}

      {/* bottomNav */}
      <WalletScreenBottomTab />
      {/* bottomNav */}
    </SafeAreaView>
  );
};

export default BillPaymentScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  descText: {
    width: widthPixel(297),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interRegular,
    fontSize: fontPixel(20),
    letterSpacing: fontPixel(-0.4),
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
  heroContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(15),
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
