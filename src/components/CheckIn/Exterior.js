import React from 'react'
import { View, Text } from 'react-native'
import FormInput from '../FormInput';
import FormButton from '../FormButton';



const Exterior = () => {
    return (
        <View>
        <FormInput
          // labelValue={email}
          InputSubject="Road Tax"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Road Antena"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Speed limit label"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Door alarm"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          // labelValue={email}
          InputSubject="Center locking"
          onChangeText={userEmail => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

      </View>
      )
}

export default Exterior
