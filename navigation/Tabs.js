import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MIIcon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home/Home';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Jobs from '../Screens/Jobs';
import FeIcon from 'react-native-vector-icons/Feather';
import Setting from '../Screens/Setting';
import Scan from '../Screens/Scan';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const CustomTabBarButton = ({children,onPress}) => (
        <TouchableOpacity style={{
            bottom:75,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
        }} onPress={onPress} >
            <View style={{
                width: 120,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: 45,
                borderRadius: 50,
                backgroundColor : '#AE282E',
                flexDirection: 'row',
                paddingLeft:5,
                paddingRight:5,
            }} >
                                    <MIIcon name='qrcode-scan' size={22} color="#fff" />
                                    <Text
                                        style={{color:'#fff', fontSize: 12}}
                    > SCAN QR</Text>
            </View>

        </TouchableOpacity>
    )

    return (
       <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor:'#6D93B2',
        tabBarShowLabel: false,
        headerShown: false ,
        tabBarStyle: {
        //   paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          position:'absolute',
          elevation: 0,
          backgroundColor: '#004A7F',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          height: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
       >
           <Tab.Screen name="home" component={Home} 
            options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center',flexDirection: 'row'}}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/HOME.png')} 
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            margin: 5,
                            tintColor: focused?'#fff' : '#6D93B2',
                        }}
                    />
                    <Text
                    style={{color:focused?'#fff' : '#6D93B2', fontSize: 15}}
                    > Home</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="dashboard" component={Dashboard} 
             options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center' , flexDirection: 'row' }}
                    >

                    <Image 
                    source={require('../src/assets/BottomIcon/DASHBOARD.png')} 
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            margin: 5,
                            tintColor: focused?'#fff' : '#6D93B2',
                        }}
                    />
                    <Text
                     style={{color:focused?'#fff' : '#6D93B2', fontSize: 15}}
                    > Dashboard</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="scan" component={Scan}  
             options={{
                  tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                ),
            }}
            />
           <Tab.Screen name="jobs" component={Jobs} 
              options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', flexDirection: 'row' }}
                    >

                    <Image 
                    source={require('../src/assets/BottomIcon/JOBS.png')} 
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: focused?'#fff' : '#6D93B2',

                        }}
                    />
                    <Text
                        style={{color:focused?'#fff' : '#6D93B2', fontSize: 15}}

                    > Jobs</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="settings" component={Setting}
              options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', flexDirection: 'row', }}
                    >

                    <Image 
                    source={require('../src/assets/BottomIcon/SETTINGS.png')} 
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: focused?'#fff' : '#6D93B2',
                        }}
                    />
                    <Text
                                        style={{color:focused?'#fff' : '#6D93B2', fontSize: 15}}

                    > Settings</Text>
                    </View>
                ),
            }}
            />
       </Tab.Navigator>
    )
}

export default Tabs
