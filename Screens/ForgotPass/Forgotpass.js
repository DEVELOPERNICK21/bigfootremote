import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import FormButton from '../../src/components/FormButton';
import FormInput from '../../src/components/FormInput';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import { ForogotPassWrapper, ForogotContentWrap } from './ForgotpassStyle';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const SendOTP = (props) => {
  const [emailForPass, setEmailForPass] = useState();
  const [inputOTP, setInputOTP] = useState(false);
  const [OTPForPass, setOTPForPass] = useState();
  const navigation = useNavigation();



  const UpdatePassHandler = async () => {


    // fetch("https://bigfoot.reddotapps.com.sg/api/app/forget-password-request", 
    // {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify({
    //     "password":emailForPass,
    //   })
    // }
    // )
    // .then(res => res.json())
    // .then(async(data)=>{
    //   console.log(data, 'THIS IS THE FORGOT PASS LOG');
    // })

    // navigation.navigate(NavigationStrings.FOROGOT_PASS_SCREEN);

    Alert.alert('ENTER THE OTP!', 'Enter the OTP you recived on your email. ', [
      { text: 'Okay' }
    ]
    );

    setInputOTP(true)


  }


  return (
    <ForogotPassWrapper>
      <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="Forgot Password"
      />
      <ForogotContentWrap>
        <FormInput
          // labelValue={email}
          InputSubject="Enter Email"
          onChangeText={(email) => setEmailForPass(email)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {
          inputOTP === false ? null :
            <Animatable.View animation="fadeInUp" duration={500}>

              <FormInput
                InputSubject="Enter OTP"
                onChangeText={(OTP) => setOTPForPass(OTP)}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <FormButton
                buttonTitle="UPDATE PASSWORD"
                onPress={UpdatePassHandler} />
            </Animatable.View>
        }

        {
          inputOTP === true ? null :

        <FormButton
          buttonTitle="SEND OTP"
          onPress={UpdatePassHandler} />
        }

      </ForogotContentWrap>
    </ForogotPassWrapper>
  );
};

export default SendOTP;
