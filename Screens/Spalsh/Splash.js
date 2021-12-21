import React from 'react';
import { SplashWrapper,LogoConatiner, SplashScreenLogo } from './SplashStyle';
import Logo from '../../src/assets/Images/image.jpg'
import FormButton from '../../src/components/FormButton'
import NavigationStrings from '../../src/Constants/NavigationStrings';

const Splash = (props) => {

  // console.log("props IS here",props)
  return (
    <>
      <SplashWrapper>
      <LogoConatiner>
        <SplashScreenLogo
          source={Logo}
        />
      </LogoConatiner>
        <FormButton 
             buttonTitle="Get Started"
             onPress={() => {
              props.navigation.navigate(NavigationStrings.LOGIN_SCREEN);
            }}        />
      </SplashWrapper>
    </>
  );
};

export default Splash;
