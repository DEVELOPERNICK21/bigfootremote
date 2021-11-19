import React from 'react'
import { View, Text } from 'react-native'
import { JobCircle,CircleWrapper,CircleText } from '../../../Screens/Dashboard/DashboardStyle'

const MultiColorCircle = (props) => {
    return (
    <CircleWrapper>
        <JobCircle bgColor={props.colors} ></JobCircle>
        <CircleText>{props.title}</CircleText>
    </CircleWrapper>   
     )
}

export default MultiColorCircle
