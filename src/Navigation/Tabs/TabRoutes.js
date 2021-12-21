import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../../Screens/Home/Home';
import Dashboard from '../../../Screens/Dashboard/Dashboard';
import Jobs from '../../../Screens/Jobs/Jobs';
import Setting from '../../../Screens/Settings/Setting';
import Scan from '../../../Screens/Scan/Scan';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { QRScannerWrapper, QRView, QRText } from './TabRoutesStyle';
import NavigationStrings from '../../Constants/NavigationStrings';
import ImagePath from '../../Constants/ImagePath';




const Tab = createBottomTabNavigator();


const TabRoutes = () => {

    const CustomTabBarButton = ({ children, onPress }) => (
        <QRScannerWrapper onPress={onPress} >
            <QRView>
                <MIIcon name='qrcode-scan' size={22} color="#fff" />
                <QRText
                > SCAN QR</QRText>
            </QRView>

        </QRScannerWrapper>
    )

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                headerShown: false,
                tabBarInactiveTintColor: '#6D93B2',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    //   paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: '#004A7F',
                    borderTopRightRadius: 5,
                    borderTopLeftRadius: 5,
                    height: hp('11.5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            <Tab.Screen name={NavigationStrings.HOME_SCREEN} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                        >

                            <Image
                                source={focused ? ImagePath.Home_Active : ImagePath.Home_Inactive}
                                style={{
                                    tintColor: focused ? '#fff' : '#6D93B2',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#fff' : '#6D93B2', fontSize: 15 }}
                            > Home</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.DASHBOARD_SCREEN} component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                        >

                            <Image
                                source={focused ? ImagePath.Dash_Active : ImagePath.Dash_Inactive}
                                style={{
                                    tintColor: focused ? '#fff' : '#6D93B2',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#fff' : '#6D93B2', fontSize: 15 }}
                            > Dashboard</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.SCAN_SCREEN} component={Scan}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.JOBS_SCREEN} component={Jobs}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                        >

<Image
                                source={focused ? ImagePath.Jobs_Active : ImagePath.Jobs_Inactive}
                                style={{
                                    tintColor: focused ? '#fff' : '#6D93B2',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#fff' : '#6D93B2', fontSize: 15 }}

                            > Jobs</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.SETTINGS_SCREEN} component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}
                        >

<Image
                                source={focused ? ImagePath.Settings_Active : ImagePath.Settings_Inactive}
                                style={{
                                    tintColor: focused ? '#fff' : '#6D93B2',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#fff' : '#6D93B2', fontSize: 15 }}

                            > Settings</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRoutes
