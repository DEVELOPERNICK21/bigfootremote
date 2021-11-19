import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import Logo from '../src/assets/Images/image2.jpg'
import FormInput from '../src/components/FormInput'
import FormButton from '../src/components/FormButton'

const Login = (props) => {
    return (
        <>
        <View style={styles.LoginWrapper}>
            <Image style={styles.LoginLogo}
            source={Logo}
            />
            <View style={styles.LoginTextWrapper} >
                <Text  style={styles.LoginText} >Login</Text>
                <Text  style={styles.LoginTextDiscription} >Enter your credentials to get 
                    access to the workshop app</Text>
            </View>
            <View>
                <FormInput
                    // labelValue={email}
                    InputSubject="Email Address*"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
                <FormInput
                    // labelValue={email}
                    InputSubject="Password*"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Password"
                    iconType="lock"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                 />
            </View>
            <Text style={styles.ForgotText} >Forgot Password?</Text>
            <FormButton 
             buttonTitle="Login"
             onPress={() => {
              props.navigation.navigate('terms');
            }}               />
        </View>
        
        </>
    )
}

export default Login


const styles = StyleSheet.create({
    LoginWrapper:{
        backgroundColor:'#F5F5F5',
        flex: 1,
        alignItems:'center',
        padding: 30,
        
    },
    LoginLogo: {
        width: 175,
        height: 175,
        resizeMode: 'contain',
    },
    LoginTextWrapper:{
        width:200,
        margin: 15,
        marginBottom: 30,
    },
    LoginText:{
        alignItems:'center',
        fontFamily: 'DM Sans',
        textAlign:'center',
        fontSize:25,        
        // fontWeight: 'bold',
        fontFamily: 'DMSans-Bold',
        color: '#AE282E',
    },
    LoginTextDiscription:{
        fontFamily: 'DMSans-Bold',
        alignItems:'center',
        textAlign:'center',
        
    },
    ForgotText:{
        margin: 15,
        color: '#AE282E',
    },
}) 