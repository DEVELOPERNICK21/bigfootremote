import React from 'react'
import { View } from 'react-native'
import { Guage,GuageText,PieBackground } from '../../../Screens/Dashboard/DashboardStyle'
import Pie from 'react-native-pie'


const JobCircularChart = (props) => {
    return (
        <PieBackground secondPropcolor={props.pieBackgroundColor} >
        <Pie
          radius={40}
          innerRadius={33}
          sections={[
            {
              percentage:props.percentage,
              color: props.pieColor,
            },
          ]}
          backgroundColor={props.pieBackgroundColor}
        />
        <Guage
        >
          <GuageText
          textColor={props.pieColor}
          >
           {props.percentage}%
          </GuageText>
        </Guage>
      </PieBackground>
    )
}

export default JobCircularChart
