import React from 'react'
import {  
SearchView,
SearchInput,
SearchArea,
FilterArea, }
from '../../../Screens/Home/HomeStyle';

import AntIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';
    
const SearchJob = () => {
    return (
        <SearchView>
        <SearchArea>
          <AntIcon name="search1" size={20} color="#AE282E" />
          <SearchInput placeholder="Search Jobs" />
        </SearchArea>
        <FilterArea>
          <FaIcon name="filter" size={20} color="#fff" />
        </FilterArea>
      </SearchView>
    )
}

export default SearchJob
