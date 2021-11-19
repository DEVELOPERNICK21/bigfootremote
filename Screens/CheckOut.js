import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import FormInput from '../src/components/FormInput'
import FormButton from '../src/components/FormButton'
import { ProfileWrapper,UpdateText} from '../styles/ProfileStyle'

const CheckOut = ({navigation}) => {
    return (
        <>
        <ProfileWrapper>
            <View>
                <FormInput
                    // labelValue={email}
                    InputSubject="Mileage* (in KM)" 
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <FormInput
                    // labelValue={email}
                    InputSubject="Check in by"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <FormInput
                    // labelValue={email}
                    InputSubject="Gasoline level"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
            </View>
            <FormButton 
             buttonTitle="SUBMIT"
             onPress={() => {
              props.navigation.navigate('terms');
            }}               />
        </ProfileWrapper>
        
        </>
    )
}

export default CheckOut

