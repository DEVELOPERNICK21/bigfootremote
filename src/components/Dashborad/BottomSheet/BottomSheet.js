import React from 'react'
import { BottomPopUp } from '../../../../Screens/Dashboard/DashboardStyle'
import BottomSheetButton from './BottomSheetButton'
import CustomDateDashboard from './CustomDateDashboard'
import RadioButtonDashBoard from './RadioButtonDashBoard'


const BottomSheet = (props) => {
    return (
        <>
        <BottomPopUp>
              <RadioButtonDashBoard />
              <CustomDateDashboard />
        </BottomPopUp>
        <BottomSheetButton closeItprops={props.closeIt} />
        </>
    )
}

export default BottomSheet
