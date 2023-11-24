import Splash from '../containers/Splash';
import OnBoarding from '../containers/OnBoarding';
import AuthNavigation from './Type/AuthNavigation';
import SignInScreen from '../containers/Auth/SignInScreen';
import SignInEmailScreen from '../containers/Auth/SignInEmailScreen';

export const StackRoute = {
  Splash,
  OnBoarding,
  AuthNavigation,
};

export const AuthRoute = {
  SignInScreen,
  SignInEmailScreen,
};
