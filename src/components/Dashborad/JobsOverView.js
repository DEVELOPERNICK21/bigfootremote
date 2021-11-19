import React from 'react'
import { OverViewWrapper, PieView,CircularView,CircleIndicator,JobsHeading} from '../../../Screens/Dashboard/DashboardStyle'
import JobCircularChart from './JobCircularChart';
import MultiColorCircle from './MulticolorCircle';


const JobsOverView = () => {

    return (
        <OverViewWrapper>
            <CircularView>
                <JobsHeading>Jobs OverView</JobsHeading>
                    <PieView>
                        <JobCircularChart percentage={67} />
                        <JobCircularChart percentage={46} />
                        <JobCircularChart percentage={15} />
                        <JobCircularChart percentage={75} />
                        <JobCircularChart percentage={10} />
                    </PieView>
                    <CircleIndicator>
                        <MultiColorCircle colors={'#02A0FC'} title={'Jobs Completed'}  />
                        <MultiColorCircle colors={'#2672AB'} title={'Jobs Assigned'}  />
                        <MultiColorCircle colors={'#FFA600'} title={'Open Jobs'}  />
                        <MultiColorCircle colors={'#27AE60'} title={'Jobs completed on time'}  />
                        <MultiColorCircle colors={'#FF3A29'} title={'Jobs Delayed'}  />
                    </CircleIndicator>
            </CircularView>
        </OverViewWrapper>
    )
}

export default JobsOverView

