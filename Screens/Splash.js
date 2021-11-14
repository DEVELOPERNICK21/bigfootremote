import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Logo from '../src/assets/Images/image.jpg'
import BottomLine from '../src/components/BottomLine';
import FormButton from '../src/components/FormButton'
import Login from './Login';

const Splash = (props) => {
  return (
    <>
      <View style={styles.splashWrapper} >
        <Image style={styles.SpashScreenLogo}
          source={Logo}
        />
        <FormButton 
             buttonTitle="Get Started"
             onPress={() => {
              props.navigation.navigate('login');
            }}        />
        <BottomLine />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
    splashWrapper:{
        backgroundColor:'#FFFFFF',
        flex: 1,
        justifyContent:'space-around',
        alignItems:'center',
        padding: 25,
    },
    SpashScreenLogo:{
        marginTop: 50,
        width: 225,
        height: 225,
        resizeMode: 'contain',
    },
  
}
)