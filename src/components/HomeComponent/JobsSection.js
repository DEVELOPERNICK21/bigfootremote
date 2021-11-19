import React from 'react'
import { Text } from 'react-native';
import { JobsUpperArea,
    JobUpperText,
    JobAll,
    ShowAllJob,
 } from '../../../Screens/Home/HomeStyle'
 import AntIcon from 'react-native-vector-icons/AntDesign';
import JobCard from './JobCard';


const JobsSection = () => {
    return (
        <>
        <JobsUpperArea>
          <JobUpperText>Jobs</JobUpperText>
          <ShowAllJob>
          <JobAll>
            View all
            <AntIcon name="arrowright" size={15} color="#AE282E" />
          </JobAll>
          </ShowAllJob>
        </JobsUpperArea>
        <JobCard
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        <JobCard
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        <JobCard
            JobName={'Genral Servicing & Repairs'}
            startDate={'9/10/21'}
            endDate={'10/10/21'}
         />
        </>
    )
}

export default JobsSection
