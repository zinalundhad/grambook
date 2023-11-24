import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

//custom imports
import {Colors} from '../../Theme/Colors';
import CText from '../../components/common/CText';
import String from '../../i18n/String';
import {styles} from '../../Theme';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {AppleIcon, GoogleIcon} from '../../assets/svg';
import {moderateScale} from '../../common/constant';
import {AuthNav} from '../../Navigation/NavigationKeys';

export default function SignInScreen({navigation}) {
console.log(navigation);

  const [email, setEmail] = useState('');

  const onChangeEmailField = text => {
    setEmail(text);
  };

  const onPressContinue = () => {
    navigation.navigate(AuthNav.SignInEmailScreen);
  };
  const OnPressContinueWithGoogle = () => {};

  const OnPressContinueWithApple = () => {};

  const OnPressSignUp = () => {};
  return (
    <View style={styles.mainContainerSurface}>
      <View style={styles.pv60}>
        <CText type={'B24'} align={'center'} color={Colors.White}>
          {String.welComeText}
        </CText>
        <CText type={'M14'} align={'center'} color={Colors.White}>
          {String.SignInPageText}
        </CText>
      </View>
      <View style={localStyle.mainContainerWithRadius}>
        <View>
          <CTextInput
            label={String.email}
            value={email}
            onChangeText={onChangeEmailField}
            placeholder={String.enterEmailAddress}
            keyBoardType={'email-address'}
            maxLength={30}></CTextInput>
          <View style={localStyle.BtnStyle}>
            <CButton onPress={onPressContinue} style={localStyle.ButtonStyle}>
              <CText
                type={'S16'}
                color={Colors.White}
                align={'center'}
                style={localStyle.btnTextStyle}>
                {String.ContinueWithEmail}
              </CText>
            </CButton>
          </View>
          <View style={localStyle.SignInContainer}>
            <View style={localStyle.lineStyle}></View>
            <CText
              type={'S16'}
              align={'center'}
              color={Colors.GrayScale}
              style={styles.mh10}>
              {' '}
              {String.OrContinueWith}
            </CText>
            <View style={localStyle.lineStyle}></View>
          </View>

          <TouchableOpacity
            onPress={OnPressContinueWithGoogle}
            style={localStyle.googleStyle}>
            <GoogleIcon />
            <CText
              type={'S16'}
              color={Colors.Black}
              align={'center'}
              style={styles.mh20}>
              {String.ContinueWithGoogle}
            </CText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={OnPressContinueWithApple}
            style={localStyle.googleStyle}>
            <AppleIcon />
            <CText
              type={'S16'}
              color={Colors.Black}
              align={'center'}
              style={styles.mh20}>
              {String.ContinueWithApple}
            </CText>
          </TouchableOpacity>
        </View>
        <View style={localStyle.lastViewStyle}>
          <CText type={'S16'} align={'center'} color={Colors.GrayScale}>
            {' '}
            {String.dontHaveAccount}{' '}
          </CText>
          <TouchableOpacity onPress={OnPressSignUp}>
            <CText type={'S16'} align={'center'} color={Colors.Primary}>
              {' '}
              {String.SignUp}{' '}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const localStyle = StyleSheet.create({
  BtnStyle: {
    ...styles.mv30,
    ...styles.selfCenter,
  },
  ButtonStyle: {
    width: moderateScale(330),
    ...styles.mv30,
  },
  mainContainerWithRadius: {
    ...styles.mainContainerWithRadius,
    ...styles.justifySpaceBetween,
  },
  btnTextStyle: {
    ...styles.selfCenter,
    position: 'absolute',
  },
  lineStyle: {
    height: moderateScale(1),
    backgroundColor: Colors.GrayScale,
    ...styles.flex,
  },
  SignInContainer: {
    ...styles.rowCenter,
    ...styles.mh40,
    ...styles.mb20,
  },

  googleStyle: {
    ...styles.alignCenter,
    ...styles.flexRow,
    ...styles.mv10,
    ...styles.center,
    ...styles.selfCenter,
    borderColor: Colors.Black,
    borderWidth: moderateScale(1),
    height: moderateScale(52),
    width: moderateScale(330),
    borderRadius: moderateScale(24),
  },
  lastViewStyle: {
    ...styles.rowCenter,
    ...styles.flex,
  },
});
