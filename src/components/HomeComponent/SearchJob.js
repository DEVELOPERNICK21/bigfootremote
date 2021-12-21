import React, { useRef } from 'react'
import {  
SearchView,
SearchInput,
SearchArea,
FilterArea, }
from '../../../Screens/Home/HomeStyle';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '../Dashborad/BottomSheet/BottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";


    
const SearchJob = () => {
  const refRBSheet = useRef();

    return (
        <SearchView>
        <SearchArea>
          <AntIcon name="search1" size={20} color="#AE282E" />
          <SearchInput placeholder="Search Jobs" />
        </SearchArea>
        <FilterArea onPress={() => refRBSheet.current.open()}>
          <FaIcon 
          name="filter"
          size={20} 
          color="#fff" 
           />
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
        </FilterArea>
      </SearchView>
    )
}

export default SearchJob
