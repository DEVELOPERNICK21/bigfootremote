import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { RowBottomLine, RowDownLine, RowNameAndTIme, RowStepAndTitleWrap, RowStepTick, RowTimeLine, RowTimeLineCircleCompleted, RowTimeLineSteps, RowTimeLineWrapper } from '../../../Screens/JobDetails/JobDetailStyle';
import ImagePath from '../../Constants/ImagePath';

const StepTitle = [
    {
        id: '1',
        title: 'Job Reported',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
    {
        id: '2',
        title: 'Material Collected',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
    {
        id: '3',
        title: 'Enroute',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
    {
        id: '4',
        title: 'Job Reschedule',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
    {
        id: '5',
        title: 'Work in progress ',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
    {
        id: '6',
        title: 'Job completed',
        time: '05:30 PM',
        date: '01 Oct 2021',
    },
]


const RowStepWiseForm = () => {
    const [greenTick, setGreenTick] = useState(false);

    function getIndex(id) {
        return StepTitle.findIndex(obj => obj.id === id);
    }


    return (
        <RowTimeLineWrapper>
            {
                StepTitle.map(e => (
                    <RowStepAndTitleWrap>
                        <RowTimeLine>
                            {getIndex(e.id) === 0 ?
                                null :
                                <RowDownLine></RowDownLine>
                            }
                            {/* {
                      greenTick === true ? 
                <TimeLineCircleCompleted>
                    <StepTick source={ImagePath.White_Tick} />
                </TimeLineCircleCompleted>
                :
                <TimeLineCircle>
                    <StepTick source={ImagePath.White_Tick} />
                </TimeLineCircle>

                  } */}
                            <RowTimeLineCircleCompleted>
                                <RowStepTick source={ImagePath.White_Tick} />
                            </RowTimeLineCircleCompleted>
                        </RowTimeLine>
                        <RowTimeLineSteps>
                            <RowNameAndTIme>
                                <Text>{e.title}</Text>
                                <Text>{e.time}</Text>
                            </RowNameAndTIme>
                            <Text>{e.date}</Text>
                            {getIndex(e.id) === 0 ?
                                null :
                                <RowBottomLine></RowBottomLine>
                            }
                        </RowTimeLineSteps>
                    </RowStepAndTitleWrap>
                ))
            }
        </RowTimeLineWrapper>
    )
}

export default RowStepWiseForm
