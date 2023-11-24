import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthRoute} from '../NavigationRoutes';
import {AuthNav} from '../NavigationKeys';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AuthNav.SignInEmailScreen}>
      <Stack.Screen
        name={AuthNav.SignInScreen}
        component={AuthRoute.SignInScreen}></Stack.Screen>
      <Stack.Screen
      name={AuthNav.SignInEmailScreen}
      component={AuthRoute.SignInEmailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
