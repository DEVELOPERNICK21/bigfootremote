import React,{ useRef } from 'react'
import { Text,View } from 'react-native';
import FeIcon from 'react-native-vector-icons/Feather'
import { DateTouchable,DateText,BottomPopUp } from '../../../Screens/Dashboard/DashboardStyle'
import RBSheet from "react-native-raw-bottom-sheet";


const DateInput = () => {
    const refRBSheet = useRef();

    return (
        <DateTouchable onPress={() => refRBSheet.current.open()}>
            <DateText>Oct, 2 - Oct 12,21</DateText>
            <FeIcon name='calendar' size={20} color="#004A7F" />
            <RBSheet
          ref={refRBSheet}
          height={350}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(32, 32, 32, 0.5)'
              
            },
            draggableIcon: {
              backgroundColor: "#777"
            }
          }}
        >
        <BottomPopUp>
          <Text>Filter By</Text>
        </BottomPopUp>
        </RBSheet>
        </DateTouchable>
    )
}

export default DateInput
