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
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// svgs
import BellIcon from '../assets/images/Icon/bell.svg';
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import accounts from '../library/const/Accounts';
import SimpleBtn from '../component/SimpleBtn';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const ConnectWalletScreen = ({navigation}) => {
  const [screen, setScreen] = useState('1');
  const [state, setState] = useState('0');
  const [key, setKey] = useState(false);

  console.log('key', key);

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.topBgContainer}>
        <View>
          <ImageBackground
            style={styles.topBgImg}
            source={require('../assets/images/topBg.png')}>
            <View style={styles.greetContainer}>
              <View>
                <ChevLeftLightIcon width={28} />
              </View>
              <View>
                <Text style={styles.headerText}>Connect Wallet</Text>
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
      {screen === '1' ? (
        <View style={styles.mainContainer}>
          {!key && (
            <View>
              <View style={styles.filterContainer}>
                <TouchableOpacity
                  onPressIn={() => setScreen('1')}
                  style={
                    screen === '1'
                      ? [styles.filter, {backgroundColor: COLOR.white}]
                      : styles.filter
                  }>
                  <Text style={styles.filterText}>Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPressIn={() => setScreen('2')}
                  style={
                    screen === '2'
                      ? [styles.filter, {backgroundColor: COLOR.white}]
                      : styles.filter
                  }>
                  <Text style={styles.filterText}>Accounts</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cardContainer}>
                <Image source={require('../assets/images/debitCard.png')} />
              </View>
            </View>
          )}
          {/* cards */}
          {/* issue : https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/237 */}
          <ScrollView
            onKeyboardDidShow={() => {
              setKey(true);
            }}
            onKeyboardDidHide={() => {
              setKey(false);
            }}>
            <View style={styles.cardTextContainer}>
              <View>
                <Text style={styles.cardText_one}>Add your debit Card</Text>
              </View>
              <View>
                <Text style={styles.cardText_two}>
                  This card must be connected to a bank account under your name
                </Text>
              </View>
            </View>
            {/* inputs */}
            <View style={styles.inputsContainer}>
              <View style={styles.singleInputContainer}>
                <TextInput
                  onFocus={() => setState('1')}
                  onBlur={() => setState('0')}
                  style={
                    state === '1'
                      ? [styles.textInput, styles.textInputsCommonHovered]
                      : [styles.textInput, styles.textInputsCommon]
                  }
                  placeholder="NAME ON CARD"
                  placeholderTextColor={
                    state === '1' ? COLOR.green : COLOR.lowDark
                  }
                  maxLength={20}
                />
              </View>
              <View style={styles.doubleInputContainer}>
                <TextInput
                  onFocus={() => setState('2')}
                  onBlur={() => setState('0')}
                  style={
                    state === '2'
                      ? [styles.textInputRight, styles.textInputsCommonHovered]
                      : [styles.textInputRight, styles.textInputsCommon]
                  }
                  placeholder="DEBIT CARD NUMBER"
                  placeholderTextColor={
                    state === '2' ? COLOR.green : COLOR.lowDark
                  }
                  keyboardType="number-pad"
                  maxLength={14}
                />
                <TextInput
                  onFocus={() => setState('3')}
                  onBlur={() => setState('0')}
                  style={
                    state === '3'
                      ? [styles.textInputLeft, styles.textInputsCommonHovered]
                      : [styles.textInputLeft, styles.textInputsCommon]
                  }
                  placeholder="CVV"
                  placeholderTextColor={
                    state === '3' ? COLOR.green : COLOR.lowDark
                  }
                  keyboardType="number-pad"
                  maxLength={3}
                />
              </View>
              <View style={styles.doubleInputContainer}>
                <TextInput
                  onFocus={() => setState('4')}
                  onBlur={() => setState('0')}
                  style={
                    state === '4'
                      ? [styles.textInputRight, styles.textInputsCommonHovered]
                      : [styles.textInputRight, styles.textInputsCommon]
                  }
                  placeholder="EXPIRATION MM/YY"
                  placeholderTextColor={
                    state === '4' ? COLOR.green : COLOR.lowDark
                  }
                  keyboardType="number-pad"
                  maxLength={14}
                />
                <TextInput
                  onFocus={() => setState('5')}
                  onBlur={() => setState('0')}
                  style={
                    state === '5'
                      ? [styles.textInputLeft, styles.textInputsCommonHovered]
                      : [styles.textInputLeft, styles.textInputsCommon]
                  }
                  placeholder="ZIP"
                  placeholderTextColor={
                    state === '5' ? COLOR.green : COLOR.lowDark
                  }
                  keyboardType="number-pad"
                  maxLength={3}
                />
              </View>
            </View>
          </ScrollView>
          {/* inputs */}
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.filterContainer}>
              <TouchableOpacity
                onPressIn={() => setScreen('1')}
                style={
                  screen === '1'
                    ? [styles.filter, {backgroundColor: COLOR.white}]
                    : styles.filter
                }>
                <Text style={styles.filterText}>Cards</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPressIn={() => setScreen('2')}
                style={
                  screen === '2'
                    ? [styles.filter, {backgroundColor: COLOR.white}]
                    : styles.filter
                }>
                <Text style={styles.filterText}>Accounts</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/* Tabs */}
              <View style={styles.accountTabsContainer}>
                {accounts.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={
                        index == 0
                          ? [
                              styles.accountTab,
                              {backgroundColor: COLOR.lightGreen},
                            ]
                          : styles.accountTab
                      }>
                      <View
                        style={
                          index == 0
                            ? [
                                styles.accountImage,
                                {backgroundColor: COLOR.white},
                              ]
                            : styles.accountImage
                        }>
                        {item.svg}
                      </View>
                      <View>
                        <Text
                          style={
                            index == 0
                              ? [styles.accountTitle, {color: COLOR.green}]
                              : styles.accountTitle
                          }>
                          {item.title}
                        </Text>
                        <Text
                          style={
                            index == 0
                              ? [styles.accountDesc, {color: COLOR.green}]
                              : styles.accountDesc
                          }>
                          {item.desc}
                        </Text>
                      </View>
                      <View style={index !== 0 && {opacity: 0}}>
                        {item.checkIcon}
                      </View>
                    </View>
                  );
                })}
              </View>
              {/* Tabs */}
              <View style={styles.buttonContainer}>
                <SimpleBtn
                  navigation={navigation}
                  btnTextData={'Next'}
                  target={'Wallet'}
                />
              </View>
            </View>
          </View>
        </View>
      )}
      {/* main */}

      {/* bottomNav */}
      {!key && (
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
      )}
      {/* bottomNav */}
    </SafeAreaView>
  );
};

export default ConnectWalletScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: pixelSizeVertical(100),
  },
  accountDesc: {
    width: widthPixel(149),
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(12),
  },
  accountTitle: {
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(18),
  },
  accountImage: {
    width: widthPixel(60),
    height: widthPixel(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(60),
  },
  accountTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    width: widthPixel(344),
    height: widthPixel(100),
    borderRadius: widthPixel(20),
    paddingHorizontal: pixelSizeVertical(20),
  },
  accountTabsContainer: {
    paddingHorizontal: pixelSizeVertical(35),
    gap: pixelSizeVertical(15),
    marginTop: pixelSizeVertical(35),
  },
  doubleInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: pixelSizeVertical(11),
  },
  inputText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(12),
    textTransform: 'capitalize',
  },
  labelText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(12),
    letterSpacing: fontPixel(0.72),
    color: COLOR.lowDark,
    textTransform: 'uppercase',
    marginBottom: pixelSizeVertical(10),
  },
  textInputLeft: {
    width: widthPixel(133),
    height: widthPixel(54),
  },
  textInputRight: {
    width: widthPixel(220),
    height: widthPixel(54),
  },
  textInput: {
    width: widthPixel(364),
    height: widthPixel(54),
  },
  textInputsCommonHovered: {
    borderRadius: widthPixel(8),
    borderColor: COLOR.borderGreen,
    borderWidth: widthPixel(1),
    paddingRight: pixelSizeVertical(14),
    paddingHorizontal: pixelSizeVertical(20),
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.14),
    fontSize: fontPixel(14),
  },
  textInputsCommon: {
    borderRadius: widthPixel(8),
    borderColor: COLOR.borderLight,
    borderWidth: widthPixel(1),
    paddingRight: pixelSizeVertical(14),
    paddingHorizontal: pixelSizeVertical(20),
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.14),
    fontSize: fontPixel(14),
  },
  singleInputContainer: {},
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(20),
    gap: pixelSizeVertical(8),
    paddingBottom: pixelSizeVertical(180),
  },
  cardText_two: {
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interRegular,
    fontSize: fontPixel(13),
    letterSpacing: fontPixel(-0.26),
    width: widthPixel(290),
    marginTop: pixelSizeVertical(2),
  },
  cardText_one: {
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(16),
    letterSpacing: fontPixel(-0.32),
  },
  cardTextContainer: {
    marginTop: pixelSizeVertical(18),
    paddingHorizontal: pixelSizeVertical(25),
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(20),
  },
  filterText: {
    fontSize: fontPixel(14),
    color: COLOR.lowDark,
    fontFamily: FONT_FAMILY.interRegular,
    textAlign: 'center',
  },
  filter: {
    width: widthPixel(160),
    height: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    padding: pixelSizeVertical(10),
    borderRadius: widthPixel(40),
    // backgroundColor: COLOR.white,
  },
  filterContainer: {
    width: widthPixel(334),
    height: widthPixel(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: pixelSizeVertical(40),
    backgroundColor: COLOR.light,
    borderRadius: widthPixel(40),
    paddingHorizontal: pixelSizeVertical(8),
    paddingVertical: pixelSizeVertical(4),
  },
  mainContainer: {
    width: widthPixel(414),
    height: widthPixel(731),
    backgroundColor: COLOR.white,
    elevation: 1,
    marginTop: pixelSizeVertical(-125),
    borderTopRightRadius: pixelSizeVertical(30),
    borderTopLeftRadius: pixelSizeVertical(30),
    paddingTop: pixelSizeVertical(27),
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