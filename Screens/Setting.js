import React from 'react'
import { MainWrapper } from '../styles/ConstantStyle'
import { SettingItem, SettingHeadText, SettingLogoWrap,SettingsLogo } from '../styles/SettingsStyle'
import SupportItem from '../src/components/SupportItem'
import FeIcon from 'react-native-vector-icons/Feather';

const Setting = () => {
    return (
        <MainWrapper >
            <SettingItem>
                <SettingHeadText>
                    BigFoot
                </SettingHeadText>
                <SettingLogoWrap>
                <SettingsLogo source={require('../src/assets/Images/image.jpg')} />
                </SettingLogoWrap>
                <FeIcon name='edit-2' size={20} color="#666" />
            </SettingItem>
            <SupportItem ItemIcon={'ios-location-outline'}
                itemTitle={'My Profile'}
             />
            <SupportItem ItemIcon={'chatbox-ellipses-outline'}
                itemTitle={'My Chats'}
             />
            <SupportItem ItemIcon={'ios-print-outline'}
                itemTitle={'Terms & Condition'}
             />
            <SupportItem ItemIcon={'ios-mail-outline'}
                itemTitle={'Privacy Policy'}
             />
            <SupportItem ItemIcon={'ios-call-outline'}
                itemTitle={'Support'}
             />
        </MainWrapper>
    )
}

export default Setting
