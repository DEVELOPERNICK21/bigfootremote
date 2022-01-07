import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { AuthContext } from '../components//context'
import { setUserID, setLogIn, reduxCheckToken } from '../../src/redux/action'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'


const Stack = createNativeStackNavigator();

const Routes = () => {
    const { userToken, isLoading } = useSelector(state => state.userReducer);
    const reduxDispatch = useDispatch()


    // Checking the token to show the app stack or main stack screen
    useEffect(() => {

        setTimeout(async () => {
            reduxDispatch(reduxCheckToken());
        }, 500)
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                {userToken !== null ?
                    MainStack(Stack)
                    :
                    AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
