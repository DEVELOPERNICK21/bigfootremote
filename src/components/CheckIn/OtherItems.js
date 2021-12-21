import React from 'react'
import { View, Text } from 'react-native'
import FormButton from '../FormButton'
import FormInput from '../FormInput'

const OtherItems = () => {
    return (
        <View>
        <FormInput
          // labelValue={email}
          InputSubject="Mileage* ( in KM )"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Check in by"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Gasoline level"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      )
}

export default OtherItems
