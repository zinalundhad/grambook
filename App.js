
import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors,styles } from './src/Theme';
import AppNavigator from './src/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      {/* // <StatusBar barStyle="dark-content"  /> */}
      <AppNavigator />
     </SafeAreaView>
  );
}