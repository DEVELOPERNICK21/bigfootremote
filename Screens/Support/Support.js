import React from 'react'
import {View, Text, Button, ScrollView, StatusBar, StyleSheet} from 'react-native';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import SupportItem from '../../src/components/SupportItem';
import { SupportWrap } from './SupportStyle';

const Support = (props) => {
    return (
        <SupportWrap >
               <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="Support"
      />
            <SupportItem ItemIcon={'ios-location-outline'}
                itemTitle={'8 Joo Koon Road Singapore 628972'}
             />
            <SupportItem ItemIcon={'ios-call-outline'}
                itemTitle={'+65 - 6324 4722'}
             />
            <SupportItem ItemIcon={'ios-print-outline'}
                itemTitle={'+65 - 6324 4711'}
             />
            <SupportItem ItemIcon={'ios-mail-outline'}
                itemTitle={'general@bigfoot.com.sg'}
             />
        </SupportWrap>
    )
}

export default Support


