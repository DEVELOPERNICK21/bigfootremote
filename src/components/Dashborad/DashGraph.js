import React from 'react'
import { View, Text } from 'react-native'
import {
    LineChart,
} from 'react-native-chart-kit'
import { GraphWrapper,HoursWork } from '../../../Screens/Dashboard/DashboardStyle'



const DashGraph = () => {
    return (
        <GraphWrapper>
        <HoursWork>Hours Worked</HoursWork>
        <LineChart 
                data={{
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4','Week 5'],
                    datasets: [
                        {
                            data: [
                                30,
                                20,
                                30,
                                40,
                                50,
                            ],
                            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,    
                            },
                    ],
                }}
                
                width={340} // from react-native
                height={200}
                // yAxisLabel={'10'}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '',
                        strokeWidth: '5',
                        stroke: '#FF6060',
                    },
                    propsForBackgroundLines: {
                        strokeDasharray: '', // solid background lines with no dashes
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            </GraphWrapper>
    )
}

export default DashGraph
