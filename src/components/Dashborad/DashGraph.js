import React from 'react'
import { View, Text } from 'react-native'
import {windowHeight, windowWidth} from '../../../Utils/Dimension';
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
                                10,
                                20,
                                35,
                                25,
                                20,
                            ],
                            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,    
                            },
                    ],
                }}
                fromZero={true}
                yAxisInterval={5} 
                // width={340} // from react-native
                width={windowWidth - 40}
                height={windowHeight / 4}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '1',
                        strokeWidth: '4',
                        stroke: '#FF6060',
                    },
                    propsForBackgroundLines: {
                        strokeDasharray: '1', // solid background lines with no dashes
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
