import React from 'react'
import NavigationStrings from '../Constants/NavigationStrings'
import TabRoutes from './Tabs/TabRoutes'
import {
    Chats,
    CheckIn,
    CheckOut,
    CustomerImages,
    FuelPump,
    InstallerImages,
    InstallerRemarks,
    JobDetails, Material, Profile, Support, Terms,
} from '../../Screens/index'
export default function(Stack){
    return(

        <>
            <Stack.Screen 
                name={NavigationStrings.TABS}
                component={TabRoutes}
            />
            <Stack.Screen 
                name={NavigationStrings.JOB_DETAIL_SCREEN}
                component={JobDetails}
            />
            <Stack.Screen 
                name={NavigationStrings.MATERIALS_SCREEN}
                component={Material}
            />
            <Stack.Screen 
                name={NavigationStrings.CHECK_IN_SCREEN}
                component={CheckIn}
            />
            <Stack.Screen 
                name={NavigationStrings.INSTALLER_IMAGES}
                component={InstallerImages}
            />
            <Stack.Screen 
                name={NavigationStrings.FUEL_PUMP}
                component={FuelPump}
            />
            <Stack.Screen 
                name={NavigationStrings.INSTALLER_REMARKS}
                component={InstallerRemarks}
            />
            <Stack.Screen 
                name={NavigationStrings.CUSTOMER_IMAGES}
                component={CustomerImages}
            />
            <Stack.Screen 
                name={NavigationStrings.CHECK_OUT_SCREEN}
                component={CheckOut}
            />
            <Stack.Screen 
                name={NavigationStrings.PROFILE_SCREEN}
                component={Profile}
            />
            <Stack.Screen 
                name={NavigationStrings.TERMS_SCREEN}
                component={Terms}
            />
            <Stack.Screen 
                name={NavigationStrings.SUPPORT_SCREEN}
                component={Support}
            />
            <Stack.Screen 
                name={NavigationStrings.CHATS_SCREEN}
                component={Chats}
            />
        </>
    )
}