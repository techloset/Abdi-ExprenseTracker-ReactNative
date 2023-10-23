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

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const WalletScreenBottomTab = ({navigation}) => {
  return (
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
  );
};

export default WalletScreenBottomTab;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
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
