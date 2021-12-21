import React, { useRef } from 'react'
import FeIcon from 'react-native-vector-icons/Feather'
import { Provider as PaperProvider } from 'react-native-paper';
import { DateTouchable, DateText, BottomPopUp, CustomDatePicker, CustomDateTouchable, SelectRadio, SelectCustomDate } from '../../../Screens/Dashboard/DashboardStyle'
import RBSheet from "react-native-raw-bottom-sheet";
import BottomSheet from './BottomSheet/BottomSheet';


const DateInput = () => {
  const refRBSheet = useRef();
  return (
    <PaperProvider>
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
              backgroundColor: "#DADCE5",
              width: 100,
            }
          }}
        >
         <BottomSheet  closeIt={() => refRBSheet.current.close()}  />
        </RBSheet>
      </DateTouchable>
    </PaperProvider>
  )
}

export default DateInput
