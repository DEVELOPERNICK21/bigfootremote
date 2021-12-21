import React from 'react'
import { DashboardContentWrapper, DashboardWrapper } from './DashboardStyle'
import DateInput from '../../src/components/Dashborad/DateInput'
import JobsOverView from '../../src/components/Dashborad/JobsOverView'
import DashGraph from '../../src/components/Dashborad/DashGraph'
const Dashboard = () => {
    return (
        <DashboardWrapper>
        <DashboardContentWrapper>
            <DateInput />
            <JobsOverView />
            <DashGraph />
            </DashboardContentWrapper>
        </DashboardWrapper>

    )
}

export default Dashboard
