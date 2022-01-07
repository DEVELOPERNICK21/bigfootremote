import React from 'react';
import {Login, Splash, Forgotpass, UpdatePass} from '../../Screens';
import NavigationStrings from '../Constants/NavigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.SPALSH_SCREEN} component={Splash} />
      <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={NavigationStrings.FOROGOT_PASS_SCREEN} component={Forgotpass} />
      <Stack.Screen name={NavigationStrings.UPDATE_PASSWORD} component={UpdatePass} />
    </>
  );
}
