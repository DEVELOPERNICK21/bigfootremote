import React from 'react'
import { MainWrapper } from '../../styles/ConstantStyle'
import {SettingWrapper, SettingItem, SettingHeadText, SettingLogoWrap,SettingsLogo } from './SettingsStyle'
import SupportItem from '../../src/components/SupportItem'
import FeIcon from 'react-native-vector-icons/Feather';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import SettingsItem from '../../src/components/SettingsComponent/SettingsItem';
import ImagePath from '../../src/Constants/ImagePath';
import { AuthContext } from '../../src/components/context';

const Setting = () => {
    const {signOut} = React.useContext(AuthContext);

    return (
        <SettingWrapper >
            <SettingItem>
                <SettingHeadText>
                    BigFoot
                </SettingHeadText>
                <SettingLogoWrap>
                <SettingsLogo source={require('../../src/assets/Images/image.jpg')} />
                </SettingLogoWrap>
                <FeIcon name='edit-2' size={20} color="#666" />
            </SettingItem>
            <SettingsItem 
                ItemImage={ImagePath.Profile_Image}
                itemTitle={'My Profile'}
                screenName={NavigationStrings.PROFILE_SCREEN}
             />
            <SettingsItem 
                ItemImage={ImagePath.Chats_Image}
                itemTitle={'My Chats'}
                screenName={NavigationStrings.CHATS_SCREEN}
             />
            <SettingsItem 
                ItemImage={ImagePath.Terms_Image}
                itemTitle={'Terms & Condition'}
                screenName={NavigationStrings.TERMS_SCREEN}
             />
            <SettingsItem 
                ItemImage={ImagePath.Privacy_Image}
                itemTitle={'Privacy Policy'}
                screenName={NavigationStrings.TERMS_SCREEN}
             />
            <SettingsItem 
                ItemImage={ImagePath.Support_Image}
                itemTitle={'Support'}
                screenName={NavigationStrings.SUPPORT_SCREEN}
             />
            <SettingsItem 
                ItemImage={ImagePath.Support_Image}
                itemTitle={'Log Out'}
                onPressProp={() => {signOut()}}
             />
        </SettingWrapper>
    )
}

export default Setting
