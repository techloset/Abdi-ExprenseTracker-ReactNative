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
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
import transHistory from '../library/const/TransHistory';
import transHistoryPeople from '../library/const/TransHistoryPeople';
// svgs
import BellIcon from '../assets/images/Icon/bell.svg';
import DotsIcon from '../assets/images/Icon/dots.svg';
import ChevUpLightIcon from '../assets/images/Icon/chevUpLight.svg';
import ArrowUpLight from '../assets/images/Icon/arrowUpLight.svg';
import ArrowDownLight from '../assets/images/Icon/arrowDownLight.svg';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent hidden={false} backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.topBgContainer}>
        <View style={{elevation: 10}}>
          <ImageBackground
            style={styles.topBgImg}
            source={require('../assets/images/topBg.png')}>
            <View style={styles.greetContainer}>
              <View>
                <View>
                  <Text style={styles.greetText}>Good afternoon,</Text>
                </View>
                <View>
                  <Text style={styles.userName}>Enjelin Morgeana</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bellIcon}>
                <BellIcon />
              </TouchableOpacity>
            </View>
            {/* card start */}
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTop}>
                <View style={styles.totalBalance}>
                  <Text style={styles.totalBalanceText}>Total Balance</Text>
                  <ChevUpLightIcon />
                </View>
                <View>
                  <DotsIcon />
                </View>
              </View>
              <Text style={styles.total}>$2548.00</Text>
              <View style={styles.balanceBottom}>
                <View style={styles.inExContainers}>
                  <View style={styles.inExContainers_secondary}>
                    <View style={styles.arrowContainer}>
                      <ArrowDownLight />
                    </View>
                    <Text style={styles.inExText}>Income</Text>
                  </View>
                  <Text style={styles.totalInEx}>$1840.00</Text>
                </View>
                <View style={styles.inExContainers}>
                  <View style={styles.inExContainers_secondary}>
                    <View style={styles.arrowContainer}>
                      <ArrowUpLight />
                    </View>
                    <Text style={styles.inExText}>Expense</Text>
                  </View>
                  <Text style={styles.totalInEx}>$284.00</Text>
                </View>
              </View>
            </View>
            {/* card end */}
          </ImageBackground>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.secondContainer}>
        <View style={styles.transHistoryContainer}>
          <View>
            <Text style={styles.transHistory}>Transaction History</Text>
          </View>
          <View>
            <Text style={styles.seeAll}>See all</Text>
          </View>
        </View>
        <View style={styles.transListContainer}>
          {transHistory.map((item, index) => {
            return (
              <View key={index} style={styles.transList}>
                <View style={styles.transLeft}>
                  <View style={styles.transImgContainer}>
                    <Image
                      style={item.color == 'red' && styles.transImg}
                      source={item.image}
                    />
                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={
                      item.color == 'red'
                        ? [styles.amount, {color: COLOR.red}]
                        : [styles.amount, {color: COLOR.parrot}]
                    }>
                    {item.amount}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={[styles.transHistoryContainer, {marginTop: 20}]}>
          <View>
            <Text style={styles.transHistory}>Send Again</Text>
          </View>
          <View>
            <Text style={styles.seeAll}>See all</Text>
          </View>
        </View>
        <View style={styles.transHistoryPeopleContainer}>
          {transHistoryPeople.map((item, index) => {
            return (
              <View key={index}>
                <Image source={item.image} />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Home');
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/homeFill.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Statistics');
            }}>
            <Image
              style={[
                styles.bottomTabImg,
                {
                  marginRight: pixelSizeVertical(10),
                },
              ]}
              source={require('../assets/images/bottomTab/bar.png')}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.bottomAddIcon}>
              <Image
                style={styles.addImg}
                source={require('../assets/images/bottomTab/add.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{padding: pixelSizeVertical(10)}}
            onPressIn={() => {
              navigation.navigate('Wallet');
            }}>
            <Image
              style={[styles.bottomTabImg, {marginLeft: pixelSizeVertical(10)}]}
              source={require('../assets/images/bottomTab/wallet.png')}
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
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bottomAddIcon: {
    marginTop: pixelSizeVertical(-60),
    elevation: 20,
    shadowColor: COLOR.green,
    borderRadius: 1,
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
  transHistoryPeopleContainer: {
    marginTop: pixelSizeVertical(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: fontPixel(18),
    // color: COLOR.parrot,
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.72),
  },
  titleContainer: {
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  date: {
    fontSize: fontPixel(13),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.26),
    opacity: 0.6,
  },
  title: {
    fontSize: fontPixel(16),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.32),
  },
  transImgContainer: {
    padding: pixelSizeVertical(10),
    backgroundColor: COLOR.transImageClr,
    borderRadius: 8,
    height: pixelSizeVertical(50),
    width: pixelSizeVertical(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  transImg: {
    height: pixelSizeVertical(35),
    width: pixelSizeVertical(35),
  },
  transLeft: {
    flexDirection: 'row',
    gap: 9,
  },
  transList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  transListContainer: {
    marginTop: pixelSizeVertical(16),
    gap: 16,
  },
  transHistoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: fontPixel(14),
    color: COLOR.black,
    opacity: 0.6,
    fontFamily: FONT_FAMILY.interRegular,
    letterSpacing: fontPixel(-0.28),
  },
  transHistory: {
    fontSize: fontPixel(18),
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.36),
  },
  secondContainer: {
    paddingHorizontal: pixelSizeVertical(22),
    height: widthPixel(500),
  },
  totalInEx: {
    fontSize: fontPixel(20),
    textAlign: 'right',
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.9),
  },
  inExText: {
    fontSize: fontPixel(18),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interMedium,
    letterSpacing: fontPixel(-0.9),
    opacity: 0.7,
  },
  arrowIcon: {
    width: widthPixel(18),
    height: widthPixel(18),
  },
  arrowContainer: {
    height: pixelSizeVertical(24),
    width: pixelSizeVertical(24),
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inExContainers_secondary: {
    flexDirection: 'row',
    gap: 6,
  },
  balanceBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pixelSizeVertical(20),
  },
  total: {
    fontSize: fontPixel(30),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interBold,
    letterSpacing: fontPixel(-1.5),
  },
  totalBalanceText: {
    fontSize: fontPixel(16),
    color: COLOR.white,
    fontFamily: FONT_FAMILY.interSemiBold,
    letterSpacing: fontPixel(-0.32),
  },
  totalBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceContainer: {
    width: pixelSizeVertical(388),
    height: pixelSizeVertical(201),
    backgroundColor: COLOR.greenPrimary,
    paddingVertical: pixelSizeVertical(25),
    paddingHorizontal: pixelSizeVertical(20),
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 30,
    marginTop: pixelSizeVertical(35),
    flexShrink: 0,
  },
  bellIcon: {
    padding: pixelSizeVertical(8.333),
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  greetText: {
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(14),
    color: COLOR.white,
    marginBottom: pixelSizeVertical(7),
  },
  userName: {
    fontFamily: FONT_FAMILY.interSemiBold,
    fontSize: fontPixel(20),
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
    marginBottom: pixelSizeVertical(85),
  },
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
});
