import React from 'react'
import { Text } from 'react-native';
import { JobsUpperArea,
    JobUpperText,
    JobAll,
    ShowAllJob,
 } from '../../../Screens/Home/HomeStyle'
 import AntIcon from 'react-native-vector-icons/AntDesign';
import JobCard from './JobCard';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../Constants/NavigationStrings';



const JobsSection = (props) => {
  const navigation = useNavigation();

    return (
        <>
        <JobsUpperArea>
          <JobUpperText>Jobs</JobUpperText>
          <ShowAllJob onPress={() => navigation.navigate(NavigationStrings.JOBS_SCREEN)} >
          <JobAll>
            View all
            <AntIcon name="arrowright" size={15} color="#AE282E" />
          </JobAll>
          </ShowAllJob>
        </JobsUpperArea>
        <JobCard
            jobprogress={'Work in Progress'}
            screenName={NavigationStrings.JOB_DETAIL_SCREEN}
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        <JobCard
            jobprogress={'Overdue'}
            screenName={NavigationStrings.JOB_DETAIL_SCREEN}
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        <JobCard
            jobprogress={'Upcoming'}
            screenName={NavigationStrings.JOB_DETAIL_SCREEN}
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        </>
    )
}

export default JobsSection
