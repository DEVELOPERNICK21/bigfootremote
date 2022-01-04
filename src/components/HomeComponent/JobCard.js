import React from 'react';
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
} from  '../../../Screens/Home/HomeStyle';
import { useNavigation } from '@react-navigation/native';
import { format } from "date-fns";


const JobCard = (props) => {
  const navigation = useNavigation();


  
  var start_Date = new Date(props.startDate);
  var formattedStartDate = format(start_Date, 'yy-MM-dd', )

  var end_Date = new Date(props.endDate);
  var formattedEndDate = format(end_Date, 'yy-MM-dd', )
  



  return (
    <CardArea  onPress={() => navigation.navigate(props.screenName)}  >
      <CardUpper>
        <JobName>{props.JobName}</JobName>
          <JobStatus forColor={props.jobprogress}  > {props.jobprogress}</JobStatus>
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
    </CardArea>
  );
};

export default JobCard;
