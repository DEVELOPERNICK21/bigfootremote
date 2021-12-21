import React from 'react'
import { View, Text } from 'react-native'
import { BSWrapper,BSButton,BSText } from '../../../../Screens/Dashboard/DashboardStyle'

const BottomSheetButton = (props) => {

    return (
        <BSWrapper>
            <BSButton onPress={props.closeItprops} bgcolor={'#F5F5F5'} >
                <BSText>Cancel</BSText>
            </BSButton>
            <BSButton  bgcolor={'#004A7F'}>
                <BSText  color={'#fff'}>Apply Filter</BSText>
            </BSButton>
        </BSWrapper>
    )
}

export default BottomSheetButton
