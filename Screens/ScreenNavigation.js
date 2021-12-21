import React from 'react'
import { View,Text,TouchableOpacity, Settings } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Splash from './Spalsh/Splash';
import Login from './Login/Login';
import Terms from './Terms/Terms';
import Support from './Support/Support';
import Profile from './Profile/Profile';
import Installer from './InstalerImages/Installer';
import Customer from './CustomerImages/Customer';
import InstallerRemarks from './InstallerRemarks/InstallerRemarks';
import CustomerRemarks from './CustomerRemarks/CustomerRemarks';
import CheckOut from './CheckOut/CheckOut';
import CheckIn from './CheckIn/CheckIn';
// import Tabs from '../navigation/Tabs';
import Chats from './Chats/Chats';
import DeatilJob from './JobDetails/DeatilJob';
import Materials from './Material/Materials';
import FuelPumpMain from './FuelPump/FuelPumpMain';





const Stack = createNativeStackNavigator();

const ScreenNavigation = ({ navigation }) => {


  const onPressHandler = () => {
    navigation.goBack(null)
    }

  return (
    <NavigationContainer >  
      <Stack.Navigator>
      <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
      {/* <Stack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} /> */}
        <Stack.Screen name="chats" component={Chats} options={{ headerShadowVisible: false,
          title: 'My chats',
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
                onPress={() => navigation.goBack('checkout')}      
                ></Icon.Button>
            </View>
          ),

          headerTintColor: '#AE282E',
          headerTitleStyle: { fontFamily: 'DMSans-Bold',},
        }} 
          
         />
        <Stack.Screen name="checkout" component={CheckOut} options={{ headerShadowVisible: false,
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
        <Stack.Screen name="checkin" component={CheckIn} options={{ headerShadowVisible: false,
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

        <Stack.Screen name="materials" component={Materials} options={{ headerShadowVisible: false,
          title: 'Materials',
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

        <Stack.Screen name="fuelpumpmain" component={FuelPumpMain} options={{ headerShadowVisible: false,
          title: 'Fuel Pump',
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
          headerRight: () => (
            <View style={{ marginLeft: -20, }}>
            <Text style={{ color:'#004A7F' }}  >Select all</Text>
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

        <Stack.Screen name="detailJob" component={DeatilJob} options={{ headerShadowVisible: false,
          title: 'General Serving & Repairs',

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
        <Stack.Screen name="installerremark" component={InstallerRemarks} options={{ headerShadowVisible: false,
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

        <Stack.Screen name="installerimages" component={Installer} options={{ headerShadowVisible: false,
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
          // headerLeft: () => (
          //   <View style={{ marginRight: -20,marginLeft: -20, }}>
          //     <Icon.Button
          //       name="keyboard-arrow-left"
          //       size={25}
          //       color="#979797"

          //       onPress={() => { navigation.goBack(null)}}
                

          //       backgroundColor="#F5F5F5"
          //       ></Icon.Button>
          //   </View>
          // ),

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigation
