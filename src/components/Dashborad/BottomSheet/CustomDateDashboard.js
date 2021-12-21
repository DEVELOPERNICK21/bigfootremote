import React from 'react'
import { Text } from 'react-native-paper'
import { SelectCustomDate, CustomDatePicker, CustomDateTouchable,DateText, DateHeadingText} from '../../../../Screens/Dashboard/DashboardStyle'
import FeIcon from 'react-native-vector-icons/Feather'


const CustomDateDashboard = () => {
    return (
      <SelectCustomDate>
      <DateHeadingText>Select a Custom Date</DateHeadingText>
        <CustomDatePicker>
        <CustomDateTouchable>
          <DateText>Start Date</DateText>
          <FeIcon name='calendar' size={20} color="#7777" />
        </CustomDateTouchable>
        <CustomDateTouchable>
          <DateText>End Date</DateText>
          <FeIcon name='calendar' size={20} color="#7777" />
        </CustomDateTouchable>
      </CustomDatePicker>
      </SelectCustomDate>
)
}

export default CustomDateDashboard
