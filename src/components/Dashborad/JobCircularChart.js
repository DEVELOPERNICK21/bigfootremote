import React from 'react'
import { View } from 'react-native'
import { Guage,GuageText } from '../../../Screens/Dashboard/DashboardStyle'
import Pie from 'react-native-pie'


const JobCircularChart = (props) => {
    return (
        <View style={{ width: 80, alignItems: 'center',margin: 10, justifyContent: 'center' ,backgroundColor:'#ECF7FF', borderRadius: 150}}>
        <Pie
          radius={40}
          innerRadius={33}
          sections={[
            {
              percentage: 30,
              color: '#02A0FC',
            },
          ]}
          backgroundColor="#ECF7FF"
        />
        <Guage
        >
          <GuageText
          >
           {props.percentage}%
          </GuageText>
        </Guage>
      </View>
    )
}

export default JobCircularChart
