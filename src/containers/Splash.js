
import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {initialValueGet} from '../Utils/AsyncStorage';
import {StackNav} from '../Navigation/NavigationKeys';

//local import
import CText from '../components/common/CText';
import SplashScreen from 'react-native-splash-screen';
import images from '../assets/images';
import {Colors} from '../Theme/Colors';
import strings from '../i18n/String';
import {styles} from '../Theme';
import {moderateScale} from '../common/constant';


export default function Splash({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  const asyncProcess = async () => {
    try {
      let asyncData = await initialValueGet();
      if (!!asyncData) {
        let {OnBoardingValue, accessTokenValue} = asyncData;
        if (!!accessTokenValue) {
          navigation.replace(StackNav.TabNavigation);
        } else if (!!OnBoardingValue) {
          navigation.replace(StackNav.AuthNavigation);
        } else {
          navigation.replace(StackNav.OnBoarding);
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={localStyle.mainContainer}>
      <CText type={'B48'} color={Colors.White} style={styles.mb20}>
        {strings.grambook}
      </CText>
      <Image source={images.loading} style={localStyle.ImageStyle}></Image>
    </View>
  );
}
const localStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Primary,
    ...styles.flex,
    ...styles.center,
  },
  ImageStyle: {
    height: moderateScale(70),
    width: moderateScale(70),
    top: moderateScale(150),
  },
});
