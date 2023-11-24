import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors, styles} from '../../Theme';
import {StyleSheet, View} from 'react-native';
import CText from './CText';
import {moderateScale} from '../../Common/Constant';

export default function CDropdown(props) {
  const {label, OnChange, data, value, placeholder} = props;
  return (
    <View style={localStyle.mainContainer}>
      <View style={localStyle.labelContainer}>
        <CText type={'S16'}>{label}</CText>
      </View>
      <Dropdown
        style={localStyle.dropdownStyle}
        data={data}
        value={value}
        maxHeight={180}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={localStyle.dropdownPlaceholder}
        onChange={OnChange}></Dropdown>
    </View>
  );
}

const localStyle = StyleSheet.create({
  mainContainer: {
    // marginTop : moderateScale()
  },
});
