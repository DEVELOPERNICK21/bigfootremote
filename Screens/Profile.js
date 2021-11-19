import React from 'react'
import { View, } from 'react-native'
import FormInput from '../src/components/FormInput'
import FormButton from '../src/components/FormButton'
import { ProfileWrapper,UpdateText} from '../styles/ProfileStyle'
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
    const navigation = useNavigation();
    return (
        <>
        <ProfileWrapper>
            <View>
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
            </View>
            <FormButton 
             buttonTitle="Save"
             onPress={() => {
              navigation.navigate('settings');
            }}               />
        </ProfileWrapper>
        
        </>
    )
}

export default Profile

