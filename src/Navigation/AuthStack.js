import React from 'react';
import {Login, Splash} from '../../Screens';
import NavigationStrings from '../Constants/NavigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.SPALSH_SCREEN} component={Splash} />
      <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={Login} />
    </>
  );
}
