import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SupportItemView,SupportIcon,SupportText } from '../../styles/SupportStyle';



const SupportItem = (props) => {
    return (
        <View>
         <SupportItemView >
                <SupportIcon  name={props.ItemIcon} size={25} color="#666" />
                <SupportText  >{props.itemTitle}</SupportText>
            </SupportItemView>
        </View>
    )
}

export default SupportItem
