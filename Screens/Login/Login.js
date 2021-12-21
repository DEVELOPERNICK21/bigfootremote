import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import Logo from '../../src/assets/Images/image2.jpg'
import FormInput from '../../src/components/FormInput'
import FormButton from '../../src/components/FormButton'
import NavigationStrings from '../../src/Constants/NavigationStrings'
import { setUserEmail, setUserPassword, setUserLogin, setUserLogout } from '../../src/redux/action'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-paper'
import { AuthContext } from '../../src/components/context'


const Login = (props) => {
    const { email, password, } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const { signIn } = React.useContext(AuthContext);

    const HandlerEmail = (text) => {
        dispatch(setUserEmail(text))
        console.log(text, "text email value");
    }

    const HandlerPassword = (text) => {
        dispatch(setUserPassword(text))
        console.log(text, "text password value");
    }


    const loginHandel = (email, password) => {
        signIn(email, password)
    }

    return (
        <>
            <SafeAreaView style={styles.LoginWrapper}>
                <View style={styles.LoginWraoContent}>
                    <Image style={styles.LoginLogo}
                        source={Logo}
                    />
                    <View style={styles.LoginTextWrapper} >
                        <Text style={styles.LoginText} >Login</Text>
                        <Text style={styles.LoginTextDiscription} >Enter your credentials to get
                            access to the workshop app</Text>
                    </View>
                    <View>
                        <FormInput
                            // labelValue={email}
                            changedText={(text) => HandlerEmail(text)}
                            InputSubject="Email Address*"
                            placeholderText="Email"
                            iconType="user"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <FormInput
                            // labelValue={password}
                            changedText={(text) => HandlerPassword(text)}
                            InputSubject="Password*"
                            placeholderText="Password"
                            iconType="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                        />

                    </View>

                    <Text style={styles.ForgotText} >Forgot Password?</Text>
                    <FormButton
                        buttonTitle="Login"
                        onPress={() => { loginHandel(email, password) }}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login


const styles = StyleSheet.create({
    LoginWrapper: {
        flex: 1,

    },
    LoginWraoContent: {
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        padding: 30,

    },
    LoginLogo: {
        width: 175,
        height: 175,
        resizeMode: 'contain',
    },
    LoginTextWrapper: {
        width: 200,
        margin: 15,
        marginBottom: 30,
    },
    LoginText: {
        alignItems: 'center',
        fontFamily: 'DM Sans',
        textAlign: 'center',
        fontSize: 25,
        // fontWeight: 'bold',
        fontFamily: 'DMSans-Bold',
        color: '#AE282E',
    },
    LoginTextDiscription: {
        fontFamily: 'DMSans-Bold',
        alignItems: 'center',
        textAlign: 'center',

    },
    ForgotText: {
        margin: 15,
        color: '#AE282E',
    },
}) 