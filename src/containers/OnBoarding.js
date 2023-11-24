import {View, Image, FlatList, StyleSheet, Button, DevSettings} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SetOnBoarding} from '../Utils/AsyncStorage';
import {StackNav} from '../Navigation/NavigationKeys';
import {deviceWidth, moderateScale, deviceHeight} from '../common/constant';
import CText from '../components/common/CText';
import {Colors} from '../Theme/Colors';
import {OnBoardingData} from '../api/constant';
import {styles} from '../Theme';
import CButton from '../components/common/CButton';
import strings from '../i18n/String';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function OnBoarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);

  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const OnPressContinue = async () => {
    if (currentIndex === 2) {
      // await SetOnBoarding(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.AuthNavigation}],
      });
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (currentIndex + 1),
      });
    }
  };
  const RenderItemData = useCallback(
    ({item, index}) => {
      return (
        <View style={localStyle.Container}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={localStyle.ImageStyle}></Image>
        </View>
      );
    },
    [OnBoardingData],
  );
  return (
    <View style={styles.mainContainerSurface}>
      <FlatList
        data={OnBoardingData}
        ref={slideRef}
        renderItem={({item, index}) => (
          <RenderItemData item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        pagingEnabled
      />

      <View style={localStyle.BottomView}>
        <View style={styles.rowCenter}>
          {OnBoardingData.map((_, index) => (
            <View
              key={index.toString()}
              style={[
                localStyle.topIndicatorStyle,
                {
                  width:
                    index !== currentIndex
                      ? moderateScale(10)
                      : moderateScale(25),
                  backgroundColor:
                    index !== currentIndex ? Colors.Gray40 : Colors.Primary,
                },
              ]}
            />
          ))}
        </View>
        <View style={localStyle.TextStyle}>
          <CText type={'B24'} align={'center'} color={Colors.Black}>
            {strings.title}
          </CText>
          <CText
            type={'R14'}
            align={'center'}
            color={Colors.Gray70}
            style={styles.mt10}>
            {currentIndex === 2 ? strings.description1 : strings.description}
          </CText>
        </View>
        <View
          style={
            currentIndex === 2
              ? localStyle.lastSlideBtnStyle
              : localStyle.BtnStyle
          }>
          <CButton onPress={OnPressContinue}>
            <CText type={'S16'} color={Colors.White}>
              {currentIndex === 2 ? strings.getStarted : strings.continue}
            </CText>
          </CButton>
        </View>
        <View style={localStyle.bottomTextView}>
          <CText type={'S16'} color={Colors.Black} align={'center'}>
            {currentIndex === 2 ? strings.dontHaveAccount : null}
          </CText>
          <TouchableOpacity onPress={StackNav.CreateAccount}>
            <CText type={'S16'} color={Colors.Primary} align={'center'}>
              {currentIndex === 2 ? strings.register : null}
            </CText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const localStyle = StyleSheet.create({
  Container: {
    width: deviceWidth,
    ...styles.alignCenter,
    ...styles.justifySpaceBetween,
  },
  ImageStyle: {
    width: deviceWidth,
    height: moderateScale(326),
    top: moderateScale(50),
  },
  BottomView: {
    height: moderateScale(325),
    width: moderateScale(332),
    backgroundColor: Colors.White,
    borderRadius: moderateScale(20),
    position: 'absolute',
    ...styles.selfCenter,
    bottom: moderateScale(30),
  },
  topIndicatorStyle: {
    height: moderateScale(10),
    borderRadius: moderateScale(10),
    ...styles.m5,
    top: moderateScale(10),
  },
  TextStyle: {
    ...styles.pv30,
    ...styles.ph30,
    position: 'absolute',
    top: moderateScale(10),
  },
  BtnStyle: {
    ...styles.selfCenter,
    position: 'absolute',
    bottom: moderateScale(30),
    width: moderateScale(200),
  },
  lastSlideBtnStyle: {
    ...styles.selfCenter,
    position: 'absolute',
    bottom: moderateScale(60),
    width: moderateScale(287),
  },
  bottomTextView: {
    ...styles.flexRow,
    position: 'absolute',
    bottom: moderateScale(20),
    ...styles.selfCenter,
  },
});
