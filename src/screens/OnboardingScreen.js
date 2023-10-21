import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import GradientBtn from '../component/GradientBtn';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const OnboardingScreen = ({navigation}) => {
  const navigate = navigation.navigate;
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ImageBackground
        style={styles.backgroundImg}
        source={require('../assets/images/onboarding/backgroundImg.png')}>
        <Image
          style={styles.mainImg}
          source={require('../assets/images/onboarding/man.png')}
        />
      </ImageBackground>
      {/* text */}
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>spend smarter save more</Text>
        </View>
        <View style={{marginTop: widthPixel(26)}}>
          <GradientBtn
            navigation={navigation}
            btnTextData={'Get Started'}
            target={'Home'}
          />
        </View>
        <View>
          <Text style={styles.textBottom}>
            Already have account? <Text style={styles.textLogin}>Log In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  textLogin: {
    color: COLOR.green,
    textAlign: 'center',
  },
  textBottom: {
    color: COLOR.grey,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.interRegular,
    fontSize: fontPixel(14),
    textTransform: 'capitalize',
    marginTop: pixelSizeVertical(20),
  },
  text: {
    color: COLOR.green,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.interBold,
    fontSize: fontPixel(36),
    lineHeight: fontPixel(38),
    letterSpacing: fontPixel(-0.72),
    textTransform: 'capitalize',
    width: widthPixel(301),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(30.05),
  },
  mainImg: {
    alignSelf: 'center',
    width: widthPixel(277),
    height: widthPixel(461),
  },
  backgroundImg: {
    width: widthPixel(414),
    height: widthPixel(600),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
