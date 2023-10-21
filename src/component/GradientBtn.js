import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import LinearGradient from 'react-native-linear-gradient';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';

const {widthPixel, fontPixel} = ratio;
const GradientBtn = ({navigation, btnTextData, target, param}) => {
  return (
    <View style={styles.btnShadow}>
      <TouchableOpacity
        onPress={() => {
          param
            ? navigation.navigate(target, {
                item: param.item,
              })
            : navigation.navigate(target);
        }}>
        <LinearGradient
          colors={[COLOR.secondary, COLOR.primary]}
          style={styles.button}>
          <Text style={styles.btnText}>{btnTextData}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GradientBtn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    overflow: 'hidden',
    height: widthPixel(64),
    width: widthPixel(358),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: widthPixel(25),
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.36),
    lineHeight: fontPixel(38),
    fontSize: fontPixel(18),
  },
  btnShadow: {
    // paddingBottom: 10,
  },
});
