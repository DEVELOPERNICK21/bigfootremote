import React from 'react'
import { OverViewWrapper, PieView,CircularView,CircleIndicator,JobsHeading} from '../../../Screens/Dashboard/DashboardStyle'
import JobCircularChart from './JobCircularChart';
import MultiColorCircle from './MulticolorCircle';


const JobsOverView = () => {

    return (
        <OverViewWrapper>
            <CircularView>
                <JobsHeading>Jobs Overview</JobsHeading>
                    <PieView>
                        <JobCircularChart percentage={67} pieColor={ '#02A0FC'} pieBackgroundColor={'#ECF7FF'} />
                        <JobCircularChart percentage={46}  pieColor={ '#2672AB'} pieBackgroundColor={'#EAF6FF'} />
                        <JobCircularChart percentage={15} pieColor={ '#FFA600'} pieBackgroundColor={'#FFE5D3'} />
                        <JobCircularChart percentage={75}  pieColor={ '#34B53A'} pieBackgroundColor={'#E2FBD7'} />
                        <JobCircularChart percentage={10}   pieColor={ '#FF3A29'} pieBackgroundColor={'#FFF1F0'} />
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

