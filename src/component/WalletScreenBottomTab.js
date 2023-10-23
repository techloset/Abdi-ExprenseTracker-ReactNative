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
import SCREENS from '../library/const/SCREENS';

const {pixelSizeVertical} = ratio;

const WalletScreenBottomTab = ({navigation}) => {
  return (
    <View style={styles.bottomTabContainer}>
      <View style={styles.bottomTab}>
        <TouchableOpacity
          style={{padding: pixelSizeVertical(10)}}
          onPressIn={() => {
            navigation.navigate(SCREENS.HOME);
          }}>
          <Image
            style={styles.bottomTabImg}
            source={require('../assets/images/bottomTab/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: pixelSizeVertical(10)}}
          onPressIn={() => {
            navigation.navigate(SCREENS.STATISTICS);
          }}>
          <Image
            style={styles.bottomTabImg}
            source={require('../assets/images/bottomTab/bar.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: pixelSizeVertical(10)}}
          onPressIn={() => {
            navigation.navigate(SCREENS.WALLET);
          }}>
          <Image
            style={styles.bottomTabImg}
            source={require('../assets/images/bottomTab/walletFill.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: pixelSizeVertical(10)}}
          onPressIn={() => {
            navigation.navigate(SCREENS.PROFILE);
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
