import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';
import Jobs from '../Screens/Jobs';
import FeIcon from 'react-native-vector-icons/Feather';
import Setting from '../Screens/Setting';
import Scan from '../Screens/Scan';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    const CustomTabBarButton = ({children,onPress}) => (
        <TouchableOpacity style={{
            top:-60,
            justifyContent: 'center',
            alignItems: 'center',
        }} onPress={onPress} >
            <View style={{
                width: 140,
                height: 50,
                borderRadius: 35,
                backgroundColor : '#AE282E',
            }} >

            </View>

        </TouchableOpacity>
    )

    return (
       <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor:'#6D93B2',
        tabBarShowLabel: false,
        tabBarStyle: {
        //   paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          position:'absolute',
          elevation: 0,
          backgroundColor: '#004A7F',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          height: 90,
        }
      }}
       >
           <Tab.Screen name="home" component={Home} 
            options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', top:10, flexDirection: 'row'}}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/HOME.png')} 
                        resizeMode="contain"
                        style={{
                            width: 12,
                            height: 12,
                            margin: 5,
                            tintColor: focused?'#fff' : '#6D93B2',
                        }}
                    />
                    <Text
                    style={{color:focused?'#fff' : '#6D93B2', fontSize: 12}}
                    > Home</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="dashboard" component={Dashboard} 
             options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', top:10 , flexDirection: 'row' }}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/DASHBOARD.png')} 
                        resizeMode="contain"
                        style={{
                            width: 12,
                            height: 12,
                            margin: 5,
                            tintColor: focused?'#fff' : '#6D93B2',
                        }}
                    />
                    <Text
                     style={{color:focused?'#fff' : '#6D93B2', fontSize: 12}}
                    > Home</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="scan" component={Scan} 
             options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', top:10 , flexDirection: 'row' }}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/HOME.png')} 
                        resizeMode="contain"
                        style={{
                            width: 12,
                            height: 12,
                            tintColor: focused?'#fff' : '#6D93B2',

                        }}
                    />
                    <Text
                                        style={{color:focused?'#fff' : '#6D93B2', fontSize: 12}}

                    > Home</Text>
                    </View>
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
            />
           <Tab.Screen name="jobs" component={Jobs} 
              options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', top:10 , flexDirection: 'row' }}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/JOBS.png')} 
                        resizeMode="contain"
                        style={{
                            width: 12,
                            height: 12,
                            tintColor: focused?'#fff' : '#6D93B2',

                        }}
                    />
                    <Text
                        style={{color:focused?'#fff' : '#6D93B2', fontSize: 12}}

                    > Home</Text>
                    </View>
                ),
            }}
            />
           <Tab.Screen name="settings" component={Setting}
              options={{
                tabBarIcon:({focused}) => (
                    <View
                    style={{alignItems:'center', justifyContent:'center', top:10 , flexDirection: 'row' }}
                    >
                                    {/* <FeIcon name='edit-2' size={20} color="#666" /> */}

                    <Image 
                    source={require('../src/assets/BottomIcon/SETTINGS.png')} 
                        resizeMode="contain"
                        style={{
                            width: 12,
                            height: 12,
                            tintColor: focused?'#fff' : '#6D93B2',

                        }}
                    />
                    <Text
                                        style={{color:focused?'#fff' : '#6D93B2', fontSize: 12}}

                    > Home</Text>
                    </View>
                ),
            }}
            />
       </Tab.Navigator>
    )
}

export default Tabs
