import React from 'react'
import { DashboardWrapper } from './DashboardStyle'
import DateInput from '../../src/components/Dashborad/DateInput'
import JobsOverView from '../../src/components/Dashborad/JobsOverView'
import DashGraph from '../../src/components/Dashborad/DashGraph'
import RBSheet from "react-native-raw-bottom-sheet";

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DateInput />
            <JobsOverView />
            <DashGraph />
        </DashboardWrapper>

    )
}

export default Dashboard
