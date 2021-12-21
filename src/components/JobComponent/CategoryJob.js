import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { CategoryView, JobCategoryWrapper, } from '../../../Screens/Jobs/JobsStyle'
import NavigationStrings from '../../Constants/NavigationStrings'
import JobCard from '../HomeComponent/JobCard'


const listTab = [
    {
        status: "Upcoming"
    },
    {
        status: "Work in Progress"
    },
    {
        status: "Overdue"
    },
]

const data = [
    {
        name: 'Nick',
        status: "Upcoming",
    },
    {
        name: 'Rick',
        status: "Work in Progress",
    },
    {
        name: 'Rick',
        status: "Work in Progress",
    },
    {
        name: 'Rick',
        status: "Work in Progress",
    },
    {
        name: 'Rick',
        status: "Work in Progress",
    },
    {
        name: 'pick',
        status: "Overdue",
    },
    {
        name: 'Nick',
        status: "Upcoming",
    },
    {
        name: 'Nick',
        status: "Overdue",
    },
    {
        name: 'Nick',
        status: "Work in Progress",
    },
]

const CategoryJob = () => {
    const [status, setStatus] = useState("Upcoming")
    const [dataList, setDataList] = useState(data)

    const setStatusFilter = status => {
        if (status !== null) {
            setDataList([...data.filter(e => e.status === status)])
        } else {
            setDataList(data)
        }
        setStatus(status)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainer} >
                <View>
                    <JobCard
                        screenName={NavigationStrings.JOB_DETAIL_SCREEN}
                        jobprogress={item.status}
                        JobName={'Genral Servicing & Repairs'}
                        startDate={'9/10/21'}
                        endDate={'10/10/21'}
                    />
                </View>
            </View>
        )
    }


    return (
        <JobCategoryWrapper>
            <CategoryView>
                {
                    listTab.map(e => (
                        <TouchableOpacity style={[styles.TabTouchable, status === e.status && styles.TabTouchableActive]}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text
                                style={[styles.TabText, status === e.status && styles.TabTextActive]}
                            >
                                {e.status}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </CategoryView>
            <FlatList
                data={dataList}
                keyExtractor={(e, index) => index.toString()}
                renderItem={renderItem}
            />
        </JobCategoryWrapper>
    )
}

export default CategoryJob


const styles = StyleSheet.create({

    TabTouchable: {
        flexDirection: 'row',
        padding: '2%',
        justifyContent: 'center',
        borderRadius: 50,
    },
    
    TabTouchableActive: {
        flexDirection: 'row',
        backgroundColor: '#004A7F',
        justifyContent: 'center',
        borderRadius: 50,
    },

    TabText: {
        color: '#8C8C8C',
    },

    TabTextActive: {
        color: '#fff',
    },
    itemContainer: {
        flexDirection: 'column',
        paddingVertical: 15,
    }

})