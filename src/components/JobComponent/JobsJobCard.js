import React, {useEffect, useState} from 'react';
import { Text } from 'react-native';
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
} from '../../../Screens/Home/HomeStyle';
import { useNavigation } from '@react-navigation/native';
import { format } from "date-fns";

import { useSelector, useDispatch } from 'react-redux';
import {setOrderId, reduxJobPage} from "../../redux/action"
import { showError } from '../../../Screens/ErrorHelperFunction/HelperFunction';

const JobCard = (props) => {
  const { orderId } = useSelector(state => state.userReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch()



  var start_Date = new Date(props.startDate);
  var formattedStartDate = format(start_Date, 'yy-MM-dd',)

  var end_Date = new Date(props.endDate);
  var formattedEndDate = format(end_Date, 'yy-MM-dd',)


  const onPressHandler = async  () => {
    await dispatch(setOrderId(props.orderId))
    if(orderId !== null)
    {
      console.log(props.orderId);
      console.log(orderId, "IT IS UBDER THE IF SECTION");
      dispatch(reduxJobPage(orderId))
      // navigation.navigate(props.screenName)
      
    }else{
      console.log(orderId, "IT IS UBDER THE ELSE SECTION");
      showError("Not able to fetch the Job Details...")
    }
  }

  



  return (
    <CardArea onPress={ onPressHandler }  >
      <CardUpper>
        <JobName>{props.JobName}</JobName>
        <JobStatus forColor={props.jobprogress === null ?  "Upcoming" : props.jobprogress}  >
          {props.jobprogress === '0' ? "Admin"
           : props.jobprogress === "1" ? "Mechanic" 
           : props.jobprogress === "2" ? "Washer" 
           : props.jobprogress === "3" ? "QC" 
           : props.jobprogress === "4" ? "Supervisor" 
           : props.jobprogress === "Upcoming" ? "Upcoming" 
           : props.jobprogress === "Overdue" ? "Overdue" 
           : "Upcoming" }
        </JobStatus>
      </CardUpper>
      <JobDetails>
        <JobDate>
          <StartDate>
            <UpperText>
              <CardTextGrey>Start Date</CardTextGrey>
              <CardTextBlack>{formattedStartDate}</CardTextBlack>
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
          <DownText>
            <CardTextGrey>Vehicle Type</CardTextGrey>
            <CardTextBlack>{props.VehiclType}</CardTextBlack>
          </DownText>
        </JobDate>
        <JobOtherDetail>
          <UpperText>
            <CardTextGrey>End Date</CardTextGrey>
            <CardTextBlack>{formattedEndDate}</CardTextBlack>
          </UpperText>
          <DownText>
            <CardTextGrey>Car Registration No.</CardTextGrey>
            <CardTextBlack>{props.VehicleNumber}</CardTextBlack>
          </DownText>
        </JobOtherDetail>
      </JobDetails>
        <Text>{props.orderId}</Text>
    </CardArea>
  );
};

export default JobCard;
