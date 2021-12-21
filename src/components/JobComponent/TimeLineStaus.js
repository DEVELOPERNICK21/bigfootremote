import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { TimeLineStatusWrapper, CardUpper, JobName, IndicatorContainer, OtherDetail, StatusHeading, StatusTime, RowLabelStatus, TextWrapper, TimelineBottomLine } from '../../../Screens/JobDetails/JobDetailStyle'
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Timeline from 'react-native-timeline-flatlist';
import ImagePath from '../../Constants/ImagePath';
import RowStepWiseForm from '../StepWiseForm/RowStepWiseForm';




const TimeLineStaus = (props) => {


    return (
        <TimeLineStatusWrapper>
           <CollapsibleView
                title={<Text style={{ color: "#000", fontFamily: "DMSans-Bold" }}>{props.JobName}</Text>}          
                style={{ borderWidth: 0, justifyContent: 'center', color: '#000' ,padding: 0,}}
                initExpanded={true}
                titleProps={{ fontFamily: "DMSans-Bold", width: '100%', flexDirection: 'row-reverse', justifyContent: 'space-between', color: '#000' }}

            >
                <RowStepWiseForm />

            </CollapsibleView>
        </TimeLineStatusWrapper>
    )
}


export default TimeLineStaus
