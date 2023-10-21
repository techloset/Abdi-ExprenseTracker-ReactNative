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
// svgs
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import DotsIcon from '../assets/images/Icon/dots.svg';
import ChevDownDarkIcon from '../assets/images/Icon/chevDownDark.svg';
import CalendarIcon from '../assets/images/Icon/calendar.svg';
import CalendarGreenIcon from '../assets/images/Icon/calendarGreen.svg';
import PlusCircleIcon from '../assets/images/Icon/plusCircle.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const AddExpenseScreen = ({navigation}) => {
  const [state, setState] = useState('0');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBgContainer}>
        <View>
          <ImageBackground
            style={styles.topBgImg}
            source={require('../assets/images/topBg.png')}>
            <View style={styles.greetContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevLeftLightIcon width={28} />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>Add Expense</Text>
              </View>
              <TouchableOpacity>
                <DotsIcon />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>

      {/* main */}
      <View>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.labelText}>Name</Text>
            <TouchableOpacity style={styles.selectContainer}>
              <View style={styles.netflixImageContainer}>
                <Image source={require('../assets/images/netflix.png')} />
              </View>
              <View>
                <ChevDownDarkIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.labelText}>amount</Text>
            <View
              style={
                state === '1'
                  ? styles.textInputContainerHovered
                  : styles.textInputContainer
              }>
              <TextInput
                onFocus={() => setState('1')}
                onBlur={() => setState('0')}
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="$ 48.00"
                placeholderTextColor={
                  state === '1' ? COLOR.green : COLOR.lowDark
                }
                maxLength={10}
              />
              <Text
                style={
                  state === '1'
                    ? [styles.inputText, {color: COLOR.green}]
                    : styles.inputText
                }>
                Clear
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>Date</Text>
            <View
              style={
                state === '2'
                  ? styles.textInputContainerHovered
                  : styles.textInputContainer
              }>
              <TextInput
                onFocus={() => setState('2')}
                onBlur={() => setState('0')}
                style={styles.textInput}
                // keyboardType="numeric"
                placeholder="Tue, 22 Feb 2022"
                placeholderTextColor={
                  state === '2' ? COLOR.green : COLOR.lowDark
                }
                maxLength={20}
              />
              {state === '2' ? <CalendarGreenIcon /> : <CalendarIcon />}
            </View>
          </View>
          <View>
            <Text style={styles.labelText}>Invoice</Text>
            <TouchableOpacity style={styles.invoiceContainer}>
              <PlusCircleIcon />
              <Text style={styles.inputText}>Add Invoice</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* main */}
    </SafeAreaView>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  invoiceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pixelSizeVertical(12),
    borderColor: COLOR.borderLight,
    borderWidth: widthPixel(1),
    width: widthPixel(318),
    height: widthPixel(50),
    borderRadius: widthPixel(8),
    borderStyle: 'dashed',
  },
  inputText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(12),
    // color: COLOR.green,
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
  textInputContainerHovered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(318),
    height: widthPixel(50),
    borderRadius: widthPixel(8),
    borderColor: COLOR.borderGreen,
    borderWidth: widthPixel(1),
    paddingRight: pixelSizeVertical(14),
    marginBottom: pixelSizeVertical(24),
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(318),
    height: widthPixel(50),
    borderRadius: widthPixel(8),
    borderColor: COLOR.borderLight,
    borderWidth: widthPixel(1),
    paddingRight: pixelSizeVertical(14),
    marginBottom: pixelSizeVertical(24),
  },
  textInput: {
    paddingLeft: pixelSizeVertical(20),
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.14),
    fontSize: fontPixel(14),
    width: '70%',
    height: '100%',
  },
  netflixImageContainer: {
    borderRadius: widthPixel(50),
    elevation: widthPixel(12),
    borderColor: COLOR.white,
    borderWidth: widthPixel(2),
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthPixel(318),
    height: widthPixel(50),
    borderRadius: widthPixel(8),
    borderColor: COLOR.borderLight,
    borderWidth: widthPixel(1),
    paddingHorizontal: pixelSizeVertical(14),
    paddingVertical: pixelSizeVertical(9),
    marginBottom: pixelSizeVertical(24),
  },
  mainContainer: {
    marginHorizontal: pixelSizeVertical(28),
    width: widthPixel(358),
    height: widthPixel(500),
    borderRadius: widthPixel(20),
    backgroundColor: COLOR.white,
    marginTop: pixelSizeVertical(-130),
    alignSelf: 'center',
    elevation: widthPixel(30),
    paddingHorizontal: pixelSizeVertical(20),
    paddingTop: pixelSizeVertical(30),
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
