import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR} from '../styles/consts/GlobalStyles';
import WalletScreenBottomTabData from '../library/const/WalletScreenBottomTabData';

const {pixelSizeVertical} = ratio;

const WalletScreenBottomTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomTabContainer}>
      <View style={styles.bottomTab}>
        {WalletScreenBottomTabData.map((item, index) => {
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
