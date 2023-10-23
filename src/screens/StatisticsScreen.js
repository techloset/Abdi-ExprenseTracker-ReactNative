import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// Svg
import DownloadIcon from '../assets/images/Icon/download.svg';
import ChevDownDarkIcon from '../assets/images/Icon/chevDownDark.svg';
import SortIcon from '../assets/images/Icon/sort.svg';
import ChevLeftDarkIcon from '../assets/images/Icon/chevLeftDark.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const StatisticsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        hidden={false}
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle={'dark-content'}
      />

      {/* header */}
      <View style={styles.headerContainer}>
        <View>
          <ChevLeftDarkIcon width={28} />
        </View>
        <View>
          <Text style={styles.headerText}>Statistics</Text>
        </View>
        <TouchableOpacity>
          <DownloadIcon width={21} />
        </TouchableOpacity>
      </View>
      {/* header */}
      {/* ==================== */}
      {/* graph section */}

      <View style={styles.daysContainer}>
        <TouchableOpacity style={styles.dayBtn}>
          <Text style={styles.dayBtnText}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.daysBtnText}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.daysBtnText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.daysBtnText}>Year</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.selectContainer}>
          <Text style={styles.selectText}>Expense</Text>
          <ChevDownDarkIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.graphImgContainer}>
        <Image
          style={styles.graphImg}
          source={require('../assets/images/graph.png')}
        />
        <ScrollView
          contentContainerStyle={styles.monthsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View>
            <Text style={styles.monthsText}>Mar</Text>
          </View>
          <View>
            <Text style={styles.monthsText}>Apr</Text>
          </View>
          <View>
            <Text style={styles.mayMonthsText}>May</Text>
          </View>
          <View>
            <Text style={styles.monthsText}>Jun</Text>
          </View>
          <View>
            <Text style={styles.monthsText}>Jul</Text>
          </View>
          <View>
            <Text style={styles.monthsText}>Aug</Text>
          </View>
          <View>
            <Text style={styles.monthsText}>Sep</Text>
          </View>
        </ScrollView>
      </View>
      {/* graph section */}

      {/* top spending */}

      <View style={styles.topSpendingContainer}>
        <View>
          <Text style={styles.headerText}>Top Spending</Text>
        </View>
        <TouchableOpacity>
          <SortIcon width={21} />
        </TouchableOpacity>
      </View>

      <View style={styles.topSpenContainer}>
        {/* LI */}
        <View style={styles.spenList}>
          <View style={styles.spenLeft}>
            <View style={styles.spenImgContainer}>
              <Image
                style={styles.spenImg}
                source={require('../assets/images/starbucks.png')}
              />
            </View>
            <View style={styles.spenContainer}>
              <Text style={styles.title}>Starbucks</Text>
              <Text style={styles.date}>Jan 12, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amount}>- $ 150.00</Text>
          </View>
        </View>
        {/* LI */}
        {/* LI */}
        <View style={styles.spenListCen}>
          <View style={styles.spenLeft}>
            <View style={styles.spenImgContainer}>
              <Image
                style={styles.spenImg}
                source={require('../assets/images/girl.png')}
              />
            </View>
            <View style={styles.spenContainer}>
              <Text style={styles.titleCen}>Starbucks</Text>
              <Text style={styles.dateCen}>Jan 12, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amountCen}>- $ 150.00</Text>
          </View>
        </View>
        {/* LI */}
        {/* LI */}
        <View style={styles.spenList}>
          <View style={styles.spenLeft}>
            <View style={styles.spenImgContainer}>
              <Image
                style={styles.spenImg}
                source={require('../assets/images/youtube.png')}
              />
            </View>
            <View style={styles.spenContainer}>
              <Text style={styles.title}>Starbucks</Text>
              <Text style={styles.date}>Jan 12, 2022</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amount}>- $ 150.00</Text>
          </View>
        </View>
        {/* LI */}
      </View>

      {/* top spending */}

      {/* ==================== */}
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
              source={require('../assets/images/bottomTab/barFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate('Wallet');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/wallet.png')}
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

export default StatisticsScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  amountCen: {
    fontSize: fontPixel(18),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.72),
  },
  amount: {
    fontSize: fontPixel(18),
    color: COLOR.red,
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.72),
  },
  spenContainer: {
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  dateCen: {
    fontSize: fontPixel(13),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.26),
    opacity: 0.9,
  },
  date: {
    fontSize: fontPixel(13),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.26),
    opacity: 0.6,
  },
  titleCen: {
    fontSize: fontPixel(16),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.32),
  },
  title: {
    fontSize: fontPixel(16),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.32),
  },
  spenImgContainer: {
    padding: pixelSizeVertical(10),
    borderRadius: 8,
    height: pixelSizeVertical(50),
    width: pixelSizeVertical(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  spenImg: {
    height: pixelSizeVertical(35),
    width: pixelSizeVertical(35),
  },
  spenLeft: {
    flexDirection: 'row',
    gap: 9,
  },
  spenListCen: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.green,
    width: widthPixel(372),
    height: widthPixel(70),
    padding: pixelSizeVertical(10),
    borderRadius: 12,
    alignSelf: 'center',
    elevation: widthPixel(35),
    shadowColor: COLOR.green,
  },
  spenList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.transImageClr,
    width: widthPixel(372),
    height: widthPixel(70),
    padding: pixelSizeVertical(10),
    borderRadius: 12,
    alignSelf: 'center',
  },
  topSpenContainer: {
    marginTop: pixelSizeVertical(16),
    paddingHorizontal: pixelSizeVertical(20),
    gap: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  topSpendingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(22),
    marginTop: pixelSizeVertical(60),
  },
  monthsContainer: {
    gap: pixelSizeVertical(40),
    paddingLeft: pixelSizeVertical(24),
  },
  mayMonthsText: {
    color: COLOR.green,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.28),
  },
  monthsText: {
    color: COLOR.lowDark,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.28),
  },
  graphImg: {
    width: widthPixel(388),
  },
  graphImgContainer: {
    alignItems: 'center',
    marginTop: pixelSizeVertical(16),
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.lowDark,
    borderWidth: 1,
    borderRadius: 10,
    width: widthPixel(120),
    height: widthPixel(40),
    marginRight: pixelSizeVertical(24),
  },
  selectText: {
    color: COLOR.lowDark,
    fontSize: fontPixel(14),
    fontFamily: FONT_FAMILY.interMedium,
  },
  daysBtnText: {
    color: COLOR.lowDark,
    fontSize: fontPixel(13),
    fontFamily: FONT_FAMILY.interRegular,
  },
  dayBtnText: {
    color: COLOR.white,
    fontSize: fontPixel(13),
    fontFamily: FONT_FAMILY.interRegular,
  },
  dayBtn: {
    width: widthPixel(90),
    height: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.green,
    borderRadius: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(22),
    marginTop: pixelSizeVertical(40),
  },
  headerText: {
    color: COLOR.extremeDark,
    fontSize: fontPixel(18),
    fontFamily: FONT_FAMILY.interSemiBold,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeVertical(24),
    marginTop: pixelSizeVertical(75),
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
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
});
