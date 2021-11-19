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




const JobCard = (props) => {
  return (
    <CardArea>
      <CardUpper>
        <JobName>{props.JobName}</JobName>
        <JobStatus>Work in progress</JobStatus>
      </CardUpper>
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
          <DownText>
            <CardTextGrey>Vehicle Type</CardTextGrey>
            <CardTextBlack>Car</CardTextBlack>
          </DownText>
        </JobDate>
        <JobOtherDetail>
          <UpperText>
            <CardTextGrey>End Date</CardTextGrey>
            <CardTextBlack>{props.endDate}</CardTextBlack>
          </UpperText>
          <DownText>
            <CardTextGrey>Car Registration No.</CardTextGrey>
            <CardTextBlack>102456789</CardTextBlack>
          </DownText>
        </JobOtherDetail>
      </JobDetails>
    </CardArea>
  );
};

export default JobCard;
