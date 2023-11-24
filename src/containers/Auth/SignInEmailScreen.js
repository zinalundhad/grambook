import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

//custom imports
import {styles} from '../../Theme';
import KeyboardAvoidingView from '../../components/common/KeyboardAvoidingView';
import CHeader from '../../components/common/CHeader';
import String from '../../i18n/String';

import {Colors} from '../../Theme/Colors';
import {moderateScale} from '../../common/constant';
import CText from '../../components/common/CText';
import CTextInput from '../../components/common/CTextInput';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../Navigation/NavigationKeys';
import BottomViewComponents from './BottomViewComponents';

export default function SignInEmailScreen(props) {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onChangeEmailField = text => {
    setEmail(text);
  };

  const OnChangePassword = text => {
    setPassWord(text);
  };

  const OnPressRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const onPressSignIn = () => {
    navigation.navigate(AuthNav.CreateAccountScreen);
  };

  return (
    <View style={styles.mainContainerWhite}>
      <CHeader title={String.signIn}></CHeader>
      <KeyboardAvoidingView contentContainerStyle={styles.flexGrow1}>
        <CTextInput
          label={String.emailAddress}
          value={email}
          onChangeText={onChangeEmailField}
          placeholder={String.enterEmailAddress}
          keyBoardType={'email-address'}
          maxLength={30}
        />

        <CTextInput
          label={String.passWord}
          value={passWord}
          onChangeText={OnChangePassword}
          placeholder={String.enterYourPassword}
          maxLength={15}
          isSecure
        />

        <View style={[styles.rowSpaceBetween, styles.mt15]}>
          <View style={styles.rowSpaceAround}>
            <TouchableOpacity onPress={OnPressRememberMe}>
              <Ionicons
                name={!!rememberMe ? 'radio-button-on' : 'radio-button-off'}
                color={!!rememberMe ? Colors.Primary : Colors.Gray30}
                size={moderateScale(24)}
                style={styles.ml25}></Ionicons>
            </TouchableOpacity>
            <CText type={'S14'} color={Colors.Gray70} align={'center'}>
              {String.rememberMe}{' '}
            </CText>
          </View>
          <CText
            type={'S14'}
            color={Colors.ErrorAlert}
            align={'center'}
            style={styles.mr20}>
            {' '}
            {String.forgotPassWord}{' '}
          </CText>
        </View>
        <View style={localStyle.ButtonStyle}>
          <CButton onPress={onPressSignIn}>
            <CText
              type={'S16'}
              color={Colors.White}
              align={'center'}
              style={localStyle.btnTextStyle}>
              {String.signIn}
            </CText>
          </CButton>
        </View>
        <BottomViewComponents />
      </KeyboardAvoidingView>
    </View>
  );
}

const localStyle = StyleSheet.create({
  ButtonStyle: {
    width: moderateScale(327),
    height: moderateScale(56),
    ...styles.selfCenter,
    ...styles.mv20,
  },
  btnTextStyle: {
    ...styles.selfCenter,
    position: 'absolute',
  },
});
