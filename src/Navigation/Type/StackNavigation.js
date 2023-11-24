import React from 'react';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.AuthNavigation}>
      <Stack.Screen
        name={StackNav.Splash}
        component={StackRoute.Splash}></Stack.Screen>
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}></Stack.Screen>
      <Stack.Screen
      name={StackNav.AuthNavigation}
      component={StackRoute.AuthNavigation}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
