import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../components//context'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Routes = () => {
    // const [isLoading, setLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);

// Seting the Initialo State 


const initialState = {
    email: '',
    isLoading: true,
    userToken: null,
}
// Creating the reducer function

function loginReducer(prevState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...prevState,
                userToken: action.token,
                email: action.email,
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
          body:JSON.stringify({
            "email":userName,
            "password":password
          })
        }
        )
        .then(res => res.json())
        .then(async(data)=>{
            let userToken;
            userToken = data.token.token;
            if (userName === data.user.email ) {
                try {
                    await AsyncStorage.setItem('userToken', userToken)
                    console.warn(userToken, "this is the SETED TOKEN")
                } catch (error) {
                    console.log(error)
                }
            }
            dispatch({ type: "LOGIN", email: data.user.email, token: userToken })
            //   console.log(data)
            //   console.warn(data.user, "this is the User ")
            //   console.warn(data.token, "this is the token area")
            //   console.warn(data.token.token, "this is the main token  ")
          
        })
    },
    // Sign-out function
    signOut: async () => {
        try {
            await AsyncStorage.removeItem('userToken')
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
        userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (error) {
                console.log(error)
            }
            dispatch({ type: "LOGIN", token: userToken })

        }, 500)
    }, [])

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }


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
