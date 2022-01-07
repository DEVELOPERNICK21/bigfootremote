import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import FormButton from '../../src/components/FormButton';
import FormInput from '../../src/components/FormInput';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import { ForogotPassWrapper, ForogotContentWrap } from './ForgotpassStyle';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { showSuccess, showError } from '../ErrorHelperFunction/HelperFunction';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SendOTP = (props) => {
  const [emailForPass, setEmailForPass] = useState();
  const [OTPForPass, setOTPForPass] = useState();
  const [inputOTP, setInputOTP] = useState(false);
  const navigation = useNavigation();



  const UpdatePassHandler = async (emailForPass) => {
    console.log(emailForPass, "THIS IS THE MAIL RECIVED IN THE FUNCTION");

    {
      emailForPass === undefined ? (
        showError(' Email can not be empty')
      )
        : 
        fetch("https://bigfoot.reddotapps.com.sg/api/forget-password-request",
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": emailForPass,
            })
          }
        )
          .then(response => response.json())
          .then(async (json) => {
            {
              json.success === undefined ? (
                showError(' Invalid email')
              )
                :
                console.log(json.success, "IT IS THE DATA AFTER SENDING THE OTP");
              if (json.success === true) {
                showSuccess("Enter the OTP recived on the mail")
                setInputOTP(true)
              }
            }

          })
          .catch((err) => {
            showError('Login Failed ! Username or Password is incorrect')
            // console.log(err);
          });
    }

  }

  const VerifyOTP = async (verifyEmail, verifyOTP) => {

    console.log(verifyEmail, "THIS IS THE verifyEmail RECIVED IN THE FUNCTION");
    console.log(verifyOTP, "THIS IS THE verifyOTP RECIVED IN THE FUNCTION");

     var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": verifyEmail,
      "otp": verifyOTP
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://bigfoot.reddotapps.com.sg/api/forget-password-verify", requestOptions)
      .then(response => response.text())
      .then(async (result) => {
        const obj = JSON.parse(result);
        let userToken;
        userToken = obj.token.token;
        if (obj.success === true) {
          try {
            await AsyncStorage.setItem('userToken', userToken)
          } catch (error) {
            console.log(error)
          }
          showSuccess("Verifying OTP success")
          console.log(obj.token.token, "IT IS THE TYPE AFTER VERIFYING THE OTP");
          navigation.navigate(NavigationStrings.UPDATE_PASSWORD)
        } else {
          showError("Not able to send the OTP")
        }
      })
      .catch(error => {
        showError(error)
        console.log('error', error)
      })
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
          inputOTP === true ? null :

            <FormButton
              buttonTitle="SEND OTP"
              onPress={() => { UpdatePassHandler(emailForPass) }} />
        }

        {
          inputOTP === true ?
            <Animatable.View animation="fadeInUp" duration={500}>

              <FormInput
                InputSubject="Enter OTP"
                onChangeText={(OTP) => setOTPForPass(OTP)}
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <FormButton
                buttonTitle="VERIFY OTP"
                onPress={() => { VerifyOTP(emailForPass, OTPForPass) }} />
            </Animatable.View>
            :
            null
        }


      </ForogotContentWrap>
    </ForogotPassWrapper>
  );
};

export default SendOTP;
