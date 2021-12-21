import React, { useState } from 'react'
import { View, Text, TouchableOpacity,StyleSheet,ScrollView, Dimensions,FlatList,SafeAreaView } from 'react-native'
import JobCard from '../../src/components/HomeComponent/JobCard'
import SearchJob from '../../src/components/HomeComponent/SearchJob'
import CategoryJob from '../../src/components/JobComponent/CategoryJob'
import { JobSWrapper, JobCategoryWrapper, CategoryWrapper, CategoryText } from './JobsStyle'

const Categories = ['Upcoming', 'Work in Progress', 'Overdue']


const Jobs = () => {
    return (
        <JobSWrapper>
            <SearchJob />
            <CategoryJob />
        </JobSWrapper>
    )
}

export default Jobs

