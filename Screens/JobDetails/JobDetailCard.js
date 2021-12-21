import React from 'react'
import { View, Text } from 'react-native'
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import {
    CardArea,
    CardUpper,
    JobDetails,
    JobStatus,
    JobName,
    JobDate,
    JobOtherDetail,
    StartDate,
    CardTextBlack,
    CardTextGrey,
    UpperText,
    DownText,
    GreyCircle,
    BlueCircle,
    TimeLine,
    Dash,
    JobBottomLine,
    JobButtonArea,
    JobButton,
    JobButtonText,
} from './JobDetailStyle';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const JobDetailCard = (props) => {
    return (
        <CardArea >
            <CollapsibleView
                title={<Text style={{ color: "#000", fontFamily: "DMSans-Bold" }}>{props.JobName}</Text>}          
                style={{ borderWidth: 0, justifyContent: 'center', color: '#000' ,padding: 0,}}
                initExpanded={true}
                titleProps={{ fontFamily: "DMSans-Bold", width: '100%', flexDirection: 'row-reverse', justifyContent: 'space-between', color: '#000' }}

            >
                <JobDetails>
                    <JobDate>
                        <StartDate>
                            <UpperText>
                                <CardTextGrey>Start Date</CardTextGrey>
                                <CardTextBlack>{props.startDate}</CardTextBlack>
                            </UpperText>
                            <TimeLine>
                                <GreyCircle></GreyCircle>
                                <Dash></Dash>
                                <Dash></Dash>
                                <Dash></Dash>
                                <Dash></Dash>
                                <BlueCircle></BlueCircle>
                            </TimeLine>
                        </StartDate>
                    </JobDate>
                    <JobOtherDetail>
                        <UpperText>
                            <CardTextGrey>End Date</CardTextGrey>
                            <CardTextBlack>{props.endDate}</CardTextBlack>
                        </UpperText>
                    </JobOtherDetail>
                </JobDetails>
                <JobBottomLine></JobBottomLine>
                <JobDetails>
                    <JobDate>
                        <StartDate>
                            <UpperText>
                                <CardTextGrey>Vehicle Type</CardTextGrey>
                                <CardTextBlack>{props.VehicleType}</CardTextBlack>
                            </UpperText>
                        </StartDate>
                    </JobDate>
                    <JobOtherDetail>
                        <UpperText>
                            <CardTextGrey>Car Registration No.</CardTextGrey>
                            <CardTextBlack>{props.CarRegistraionNumber}</CardTextBlack>
                        </UpperText>
                    </JobOtherDetail>
                </JobDetails>
                <JobBottomLine></JobBottomLine>
                <JobDetails>
                    <JobDate>
                        <StartDate>
                            <UpperText>
                                <CardTextGrey>Booking Date</CardTextGrey>
                                <CardTextBlack>{props.BookingDate}</CardTextBlack>
                            </UpperText>
                        </StartDate>
                    </JobDate>
                    <JobOtherDetail>
                        <UpperText>
                            <CardTextGrey>Total Amount</CardTextGrey>
                            <CardTextBlack>{props.Amount}</CardTextBlack>
                        </UpperText>
                    </JobOtherDetail>
                </JobDetails>
            </CollapsibleView>
            <JobButtonArea>
                <JobButton
                    bgColor={'#004A7F'}
                >
                    <JobButtonText>Check in Vehicle</JobButtonText>
                </JobButton>
                <JobButton
                    bgColor={'#AE282E'}
                >
                    <JobButtonText>Report Job</JobButtonText>
                </JobButton>
            </JobButtonArea>
        </CardArea>
    );
};

export default JobDetailCard;
