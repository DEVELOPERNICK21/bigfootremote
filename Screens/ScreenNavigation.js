import React from 'react'
import { View,TouchableOpacity, Settings } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Splash from './Splash';
import Login from './Login';
import Terms from './Terms';
import Support from './Support';
import Profile from './Profile';
import Installer from './Installer';
import Customer from './Customer';
import InstallerRemarks from './InstallerRemarks';
import CustomerRemarks from './CustomerRemarks';
import CheckOut from './CheckOut';
import CheckIn from './CheckIn';
import Setting from './Setting';
import Tabs from '../navigation/Tabs';


const Stack = createNativeStackNavigator();

const ScreenNavigation = ({ navigation }) => {
  return (
    <NavigationContainer >
      <Tabs />
      {/* <Stack.Navigator>
      <Stack.Screen name="settings" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="checkout" component={CheckIn} options={{ headerShadowVisible: false,
          title: 'Check Out Markings',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          
         />
        <Stack.Screen name="checkin" component={CheckOut} options={{ headerShadowVisible: false,
          title: 'Check In Markings',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          
         />

        <Stack.Screen name="customerRemark" component={CustomerRemarks}  options={{ headerShadowVisible: false,
          title: 'Customer Remarks',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          />

        <Stack.Screen name="remark" component={InstallerRemarks} options={{ headerShadowVisible: false,
          title: 'Installer Remarks',

          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          
         />

        <Stack.Screen name="customer" component={Customer} options={{ headerShadowVisible: false,
          title: 'Customer Images',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
           />

        <Stack.Screen name="installer" component={Installer} options={{ headerShadowVisible: false,
          title: 'Installer Images',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
           />


        <Stack.Screen name="profile" component={Profile} options={{ headerShadowVisible: false,
          title: 'My Profile',

          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
           />

        <Stack.Screen name="terms" component={Terms} options={{ headerShadowVisible: false,
          title: 'Terms & Conditions',
          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          />

        <Stack.Screen name="support" component={Support} options={{ headerShadowVisible: false,
          title: 'Support',

          headerStyle: {
          backgroundColor: '#F5F5F5',
          elevation: 0,
          shadowOpacity: 0
          },
          headerLeft: () => (
            <View style={{ marginRight: -20,marginLeft: -20, }}>
              <Icon.Button
                name="keyboard-arrow-left"
                size={25}
                color="#979797"
                

                backgroundColor="#F5F5F5"
                onPress={() => {
                  navigation.goBack();
                }}></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          />
        <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default ScreenNavigation
