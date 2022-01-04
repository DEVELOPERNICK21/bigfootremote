import React from 'react'
import { View, } from 'react-native'
import FormInput from '../../src/components/FormInput'
import FormButton from '../../src/components/FormButton'
import { ProfileContentWrap, ProfileWrapper,UpdateText} from './ProfileStyle'
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../../src/components/Header/HeaderComponent'
import NavigationStrings from '../../src/Constants/NavigationStrings'


const Profile = (props) => {
    const navigation = useNavigation();
    return (
        <>
        <ProfileWrapper>
          
            <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="My Profile"
      />
      <ProfileContentWrap>
                <FormInput
                    // labelValue={email}
                    InputSubject="Name"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <FormInput
                    // labelValue={email}
                    InputSubject="Email address"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
            <UpdateText >Update password</UpdateText>
         
            <FormButton 
             buttonTitle="Save"
             onPress={() => {
              navigation.navigate(NavigationStrings.SETTINGS_SCREEN);
            }}/>
            </ProfileContentWrap>
        </ProfileWrapper>
        
        </>
    )
}

export default Profile

