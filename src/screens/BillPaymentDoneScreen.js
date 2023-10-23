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
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import DotsIcon from '../assets/images/Icon/dots.svg';
import CheckIcon from '../assets/images/Icon/checkFillBig.svg';
import ChevUpDarkIcon from '../assets/images/Icon/chevUpDark.svg';
import CopyIcon from '../assets/images/Icon/copy.svg';
import SimpleBtn from '../component/SimpleBtn';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const BillPaymentDoneScreen = ({navigation, route}) => {
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
                <ChevLeftLightIcon />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>Bill Payment</Text>
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
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* hero */}
          <View style={styles.heroContainer}>
            <View style={styles.imageContainer}>
              <CheckIcon width={50} />
            </View>
            <View style={styles.topTextContainer}>
              <Text style={styles.topText}>Payment Successfully</Text>
              <Text style={styles.titleText}>{item.titleFull}</Text>
            </View>
          </View>
          {/* hero */}

          <View style={styles.transHeader}>
            <Text style={styles.transText}>Transaction Details</Text>
            <View>
              <ChevUpDarkIcon width={20} />
            </View>
          </View>

          {/* info */}
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.leftText}>Payment Method</Text>
              <Text style={styles.rightText}>Debit Card</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.leftText}>Status</Text>
              <Text style={styles.statusText}>Completed</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.leftText}>Time</Text>
              <Text style={styles.rightText}>{item.time}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.leftText}>Date</Text>
              <Text style={styles.rightText}>{item.date}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.leftText}>Transaction ID</Text>
              <View style={styles.id}>
                <Text style={styles.rightText}>{item.id}</Text>
                <CopyIcon />
              </View>
            </View>
          </View>
          <View style={styles.line}></View>
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
          <View style={{marginBottom: pixelSizeVertical(20)}}>
            <View style={styles.info}>
              <Text style={styles.leftTextTotal}>Total</Text>
              <Text style={styles.rightTextTotal}>{item.total}</Text>
            </View>
          </View>
          {/* info */}
          <SimpleBtn
            navigation={navigation}
            btnTextData={'Share Receipt'}
            target={'Wallet'}
          />
        </ScrollView>
      </View>
      {/* main */}

      {/* bottomNav */}
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate('Statistics');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/bar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate('Wallet');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/walletFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
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

export default BillPaymentDoneScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  id: {
    flexDirection: 'row',
    gap: pixelSizeVertical(8),
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
    alignItems: 'center',
    marginTop: pixelSizeVertical(40),
    marginBottom: pixelSizeVertical(21),
  },
  titleText: {
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
    letterSpacing: fontPixel(-0.32),
  },
  topText: {
    color: COLOR.green,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(22),
    letterSpacing: fontPixel(-0.4),
  },
  topTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: widthPixel(80),
    height: widthPixel(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    borderRadius: widthPixel(80),
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
  statusText: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    color: COLOR.green,
    letterSpacing: fontPixel(-0.32),
  },
  infoContainer: {
    gap: pixelSizeVertical(10),
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
