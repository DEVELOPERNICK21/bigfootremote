import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native'
import Logo from '../../src/assets/Images/image2.jpg'
import FormInput from '../../src/components/FormInput'
import FormButton from '../../src/components/FormButton'
import NavigationStrings from '../../src/Constants/NavigationStrings'
import { useNavigation } from '@react-navigation/native';

import { setUserEmail, setUserPassword, setValidCredential } from '../../src/redux/action'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../../src/components/context'
import { LoginWrapper, LoginWrapContent, LoginLogoTextWrap, LoginLogo, LoginTextWrapper, LoginText, LoginTextDiscription, ForgotTouchable, ForgotText } from './LoginStyle'


const Login = (props) => {
    const [emptyAlert, setEmptyAlert] = useState(false)
    const [invalidAlert, setInvalidAlert] = useState(false)
    const { email, password, ValidateUser } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()
    const navigation = useNavigation();





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
        if (email === '' && password === '') {
            console.error("ANDAR yaha AA NA");
            setEmptyAlert(true)
            Alert.alert('WRONG INPUT!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]
            );
            // return
        }

    }


    return (
        <>
            <LoginWrapper>
                <LoginWrapContent>
                    <LoginLogoTextWrap>
                        <LoginLogo
                            source={Logo}
                        />

                        <LoginTextWrapper >
                            <LoginText >Login</LoginText>
                            <LoginTextDiscription>Enter your credentials to get
                                access to the workshop app</LoginTextDiscription>
                        </LoginTextWrapper>
                    </LoginLogoTextWrap>
                    <View>
                        <FormInput
                            changedText={(text) => HandlerEmail(text)}
                            InputSubject="Email Address*"
                            placeholderText="Email"
                            iconType="user"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        {
                            emptyAlert === false ?
                                null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Username is empty</Text>
                                </Animatable.View>

                        }
                        {
                            invalidAlert === false ?
                                null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Username is Invalid</Text>
                                </Animatable.View>

                        }

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
                        {
                            emptyAlert === false ?
                                null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Password is empty</Text>
                                </Animatable.View>

                        }

                    </View>
                    <ForgotTouchable
                        onPress={() => {
                            navigation.navigate(NavigationStrings.FOROGOT_PASS_SCREEN)
                        }}
                    >
                        <ForgotText >Forgot Password?</ForgotText>
                    </ForgotTouchable>
                    <FormButton
                        buttonTitle="Login"
                        onPress={() => { loginHandel(email, password) }}
                    />
                </LoginWrapContent>
            </LoginWrapper>
        </>
    )
}

export default Login

