import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// CUSTOM STYLING
import { UpdatePassWrapper, UpdateContentWrap } from './UpdatePassStyle'
//CUSTOM MADE IMPORT
import FormButton from '../../src/components/FormButton'
import FormInput from '../../src/components/FormInput'
import HeaderComponent from '../../src/components/Header/HeaderComponent'
import NavigationStrings from '../../src/Constants/NavigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError, showSuccess } from '../ErrorHelperFunction/HelperFunction';



const UpdatePass = (props) => {
  const [newPassword, setNewPassword] = useState()
  const navigation = useNavigation();


  const updatePassword = async (newPassforUpdate) => {
    let userToken;
    userToken = null;
    try {
      userToken = await AsyncStorage.getItem('userToken')
    } catch (error) {
      console.log(error)
    }
    console.log(userToken, 'AUTHTOKEN FROM UPDATEPASS PAGE IS BRINGS A MESSAGE');

    fetch('https://bigfoot.reddotapps.com.sg/api/app/update-password',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify({
          password: newPassforUpdate,
        })
      }
    )
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.success === true) {
          showSuccess("Password Updated Successfully")
          navigation.navigate(NavigationStrings.LOGIN_SCREEN)
          navigation.navigate(NavigationStrings.HOME_SCREEN)
        }
      })
      .catch(error => {
        showError(error);
        console.log('error', error);
      });

  };


  return (
    <UpdatePassWrapper>
      <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="Update Password"
      />
      <UpdateContentWrap>
        <FormInput
          InputSubject="Enter New Password"
          onChangeText={(pass) => setNewPassword(pass)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormButton
          buttonTitle="UPDATE PASSWORD"
          onPress={() => updatePassword(newPassword)} />


      </UpdateContentWrap>
    </UpdatePassWrapper>
  )
}

export default UpdatePass
