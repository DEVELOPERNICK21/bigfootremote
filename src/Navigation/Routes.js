import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../components//context'
import { setUserID, setLogIn } from '../../src/redux/action'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'


const Stack = createNativeStackNavigator();

const Routes = (props) => {
    const { uid, email, password } = useSelector(state => state.userReducer);
    const reduxDispatch = useDispatch()



    // const [isLoading, setLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);

    // Seting the Initialo State 


    const initialState = {
        email: '',
        isLoading: true,
        userToken: null,
        userInvaild: false,
        userData: '',
    }
    // Creating the reducer function

    function loginReducer(prevState, action) {
        switch (action.type) {
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    email: action.email,
                    userData: action.userData,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    email: null,
                    isLoading: false,
                };
            default:
                return prevState;
        }
    }

    // Using the reducer 
    const [loginState, dispatch] = React.useReducer(loginReducer, initialState);




    // Using the SignIn and SignOut function   
    const authContext = React.useMemo(() => ({
        // Sign-in function
        signIn: async (userName, password) => {

            fetch("https://bigfoot.reddotapps.com.sg/api/app/login",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email": userName,
                        "password": password
                    })
                }
                )
                .then(res => res.json())
                .then(async (data) => {
                    let userToken;
                    userToken = data.token.token;
                    // userRole = data.user.role;
                    // dispatch(setUserID(data.user.id))
                    // console.warn(data.user.id, "this is the SETED TOKEN")
                    if (userName === data.user.email) {
                        // reduxDispatch(setValidCredential(false))
                        try {
                            await AsyncStorage.setItem('userToken', userToken)
                            // await AsyncStorage.setItem('userRole', userRole)
                            console.warn(userToken, "this is the SETED TOKEN")
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    reduxDispatch(setUserID(data))
                    // reduxDispatch(setLogIn(usertoken,data.user.email, false ))
                    console.log(data, "ALL THE DATA OF THE USER");
                    dispatch({ type: "LOGIN", email: data.user.email, token: userToken, userData: data })
             
                })
        
        },

      
        // Sign-out function
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken')
                // await AsyncStorage.removeItem('userRole')
            } catch (error) {
                console.log(error)
            }
            dispatch({ type: "LOGOUT" })
        },
    }));


    // Checking the token to show the app stack or main stack screen
    useEffect(() => {

        setTimeout(async () => {
            // Fetching the data using API 

            let userToken;
            // let userRole;
            userToken = null;
            // userRole = null;
            try {
                userToken = await AsyncStorage.getItem('userToken')
                // userRole = await AsyncStorage.getItem('userRole')
            } catch (error) {
                console.log(error)
            }
            dispatch({ type: "LOGIN", token: userToken })
            console.log(userToken, 'LOGIN HO GAYA');
        }, 500)
    }, [])

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

      const foundUser = () => {

        };

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>

                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    {loginState.userToken !== null ?
                        MainStack(Stack)
                        :
                        AuthStack(Stack)
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Routes
