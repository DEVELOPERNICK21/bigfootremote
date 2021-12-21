import React from 'react'
import { View, Text } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import JobNavigate from '../../src/components/JobComponent/JobNavigate';
import TimeLineStaus from '../../src/components/JobComponent/TimeLineStaus';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import JobDetailCard from './JobDetailCard';
import { DetailJobWrapper, JobNumberArea, JobMainStatus, JobHexNumber, JobStatusText, NavigateView, DetailScrollView } from './JobDetailStyle';

const DeatilJob = (props) => {
    return (
        <DetailJobWrapper>
            <HeaderComponent
                goBack={() => props.navigation.goBack()}
                text="General Servicing  & Repairs"
            />
            <DetailScrollView>
            <JobNumberArea>
                <JobHexNumber>#12465678</JobHexNumber>
                <JobMainStatus>
                    <IonIcon name="ios-checkmark-circle-outline" size={20} color="#27AE60" />
                    <JobStatusText>Completed</JobStatusText>
                </JobMainStatus>
            </JobNumberArea>
            <JobDetailCard
                JobName={'Job Details'}
                startDate={'9/10/21'}
                endDate={'10/10/21'}
                VehicleType={'Car'}
                CarRegistraionNumber={'102456789'}
                BookingDate={'10 Oct 2021'}
                Amount={'$500.99'}
            />
            <TimeLineStaus
                JobName={'TimeLine'}
            />
            <NavigateView>
                <JobNavigate
                    screenName={NavigationStrings.MATERIALS_SCREEN}
                    toCollect={'To Collect'}
                    JobName={'Materials'}
                />
                <JobNavigate
                    screenName={NavigationStrings.CHECK_IN_SCREEN}
                    JobName={'Check In Markings'}
                />
                <JobNavigate
                    screenName={NavigationStrings.INSTALLER_IMAGES}
                    JobName={'Insataller Images'}
                />
                <JobNavigate
                    screenName={NavigationStrings.INSTALLER_REMARKS}
                    JobName={'Installer Remarks'}
                />
                <JobNavigate
                    screenName={NavigationStrings.CUSTOMER_IMAGES}
                    JobName={'Customer Images'}
                />
                <JobNavigate
                    screenName={NavigationStrings.CHECK_OUT_SCREEN}
                    JobName={'Check Out Markings'}
                />
            </NavigateView>
            </DetailScrollView>
        </DetailJobWrapper>
    )
}

export default DeatilJob
