import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ratio from '../styles/consts/ratio';
import {COLOR, FONT_FAMILY} from '../styles/consts/GlobalStyles';
// svgs
import BellIcon from '../assets/images/Icon/bell.svg';
import UserIcon from '../assets/images/Icon/user.svg';
import UsersIcon from '../assets/images/Icon/users.svg';
import EnvelopeIcon from '../assets/images/Icon/envelope.svg';
import ShieldIcon from '../assets/images/Icon/shield.svg';
import LockIcon from '../assets/images/Icon/lock.svg';
import ChevLeftLightIcon from '../assets/images/Icon/chevLeftLight.svg';
import SCREENS from '../library/const/SCREENS';

const {widthPixel, fontPixel, pixelSizeVertical} = ratio;
const ProfileScreen = ({navigation}) => {
  const profileOptionsData = [
    {svg: <UserIcon />, title: 'Account Info'},
    {svg: <UsersIcon />, title: 'Personal profile'},
    {svg: <EnvelopeIcon />, title: 'Message center'},
    {svg: <ShieldIcon />, title: 'Login and security'},
    {svg: <LockIcon />, title: 'Data and privacy'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
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
                <Text style={styles.headerText}>Profile</Text>
              </View>
              <TouchableOpacity style={styles.bellIcon}>
                <BellIcon />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.profileDataContainer}>
            <Image source={require('../assets/images/profilePic.png')} />
            <View>
              <Text style={styles.fullName}>Enjelin Morgeana</Text>
            </View>
            <View>
              <Text style={styles.userName}>@enjelin_morgeana</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileOptionsContainerTop}>
        <TouchableOpacity style={styles.profileOptionsTop}>
          <Image
            style={styles.profileOptionsImage}
            source={require('../assets/images/diamond.png')}
          />
          <Text style={styles.profileOptionsText}>Invite Friends</Text>
        </TouchableOpacity>
        {/* line */}
        <View style={styles.line}></View>
        {/* line */}
      </View>
      <ScrollView contentContainerStyle={styles.profileOptionsContainer}>
        {profileOptionsData.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.profileOptions}>
              <View>{item.svg}</View>
              <Text style={styles.profileOptionsText}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* header */}
      {/* bottomNav */}
      <View style={styles.bottomTabContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate(SCREENS.HOME);
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate(SCREENS.STATISTICS);
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/bar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate(SCREENS.WALLET);
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/wallet.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paddingTen}
            onPress={() => {
              navigation.navigate(SCREENS.PROFILE);
            }}>
            <Image
              style={styles.bottomTabImg}
              source={require('../assets/images/bottomTab/userFill.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* bottomNav */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  paddingTen: {
    padding: pixelSizeVertical(10),
  },
  line: {
    backgroundColor: COLOR.light,
    width: widthPixel(364),
    height: widthPixel(1),
    marginTop: pixelSizeVertical(15),
  },
  profileOptionsText: {
    color: COLOR.black,
    fontFamily: FONT_FAMILY.interMedium,
    fontSize: fontPixel(16),
  },
  profileOptionsImage: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  profileOptionsTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(20),
  },
  profileOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeVertical(30),
  },
  profileOptionsContainer: {
    paddingHorizontal: pixelSizeVertical(35),
    gap: pixelSizeVertical(23),
    paddingBottom: 100,
    marginTop: pixelSizeVertical(15),
  },
  profileOptionsContainerTop: {
    paddingHorizontal: pixelSizeVertical(25),
    marginTop: pixelSizeVertical(34),
  },
  userName: {
    color: COLOR.green,
    fontFamily: FONT_FAMILY.interBold,
    fontSize: fontPixel(14),
  },
  fullName: {
    color: COLOR.extremeDark,
    fontFamily: FONT_FAMILY.interBold,
    fontSize: fontPixel(20),
    marginTop: pixelSizeVertical(-8),
  },
  profileDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(-90),
  },
  bellIcon: {
    padding: pixelSizeVertical(8.333),
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
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
