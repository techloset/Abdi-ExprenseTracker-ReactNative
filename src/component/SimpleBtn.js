import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';

const {widthPixel, fontPixel} = ratio;
const SimpleBtn = ({navigation, btnTextData, target}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(target)}>
      <Text style={styles.btnText}>{btnTextData}</Text>
    </TouchableOpacity>
  );
};

export default SimpleBtn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    overflow: 'hidden',
    height: widthPixel(60),
    width: widthPixel(350),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: widthPixel(1),
    borderColor: COLOR.borderGreen,
  },
  btnText: {
    color: COLOR.green,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.36),
    lineHeight: fontPixel(38),
    fontSize: fontPixel(18),
  },
});
