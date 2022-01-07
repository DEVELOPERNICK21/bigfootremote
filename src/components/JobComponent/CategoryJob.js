import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, FlatList, SafeAreaView } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { CategoryView, JobCategoryWrapper, } from '../../../Screens/Jobs/JobsStyle'
import NavigationStrings from '../../Constants/NavigationStrings'
import JobCard from '../JobComponent/JobsJobCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUpcomingJobData } from '../../redux/action'
import { useSelector, useDispatch } from 'react-redux'



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
    const [dataList, setDataList] = useState(upComingData)
    const [jobRole, setJobRole] = useState()
    const [workInProgressdataList, setWorkInProgressdataList] = useState('')
    const [overDueDataList, setOverDueDataList] = useState('')
    const [statusUP, setStatusUP] = useState('')
    const [statusOVER, setStatusOVER] = useState('')

    const { upComingData, upComing } = useSelector(state => state.userReducer);
    const dispatch = useDispatch()



    const readData = async () => {
        try {
            const userRole = await AsyncStorage.getItem('userRole')

            if (userRole !== null) {
                setJobRole(userRole)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
        console.log(upComing, "THE VALUE INSIDE THE UPCOMING");
    }

    // Here Fetching The API


    useEffect(() => {

        setTimeout(async () => {
            // Fetching the data using API 

            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (error) {
                console.log(error)
            }
            console.log(userToken, 'AUTHTOKEN FROM JOBS PAGE IS BRINGS A MESSAGE');

            //   Upcoming Data Fetching Here 

            fetch("https://bigfoot.reddotapps.com.sg/api/app/upcoming-jobs",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },

                }
            )
                .then(res => res.json())
                .then(async (UpComingResdata) => {
                    console.log(UpComingResdata, 'THIS IS THE Upcoming Job DATA');
                    console.log(UpComingResdata[0].job_id, 'Category Data');
                    dispatch(setUpcomingJobData(UpComingResdata))
                    setDataList(UpComingResdata)

                })
            //   Work in Progress Data Fetching Here 

            fetch("https://bigfoot.reddotapps.com.sg/api/app/work-in-progress-jobs",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },

                }
            )
                .then(res => res.json())
                .then(async (workInProgressData) => {
                    console.log(workInProgressData, 'THIS IS THE WIP Job DATA');
                    console.log(workInProgressData[0].job_id, 'Category Data');
                    // dispatch(setUpcomingJobData(workInProgressData))
                    setWorkInProgressdataList(workInProgressData)

                })
            //   Overdue Fetching Here 

            fetch("https://bigfoot.reddotapps.com.sg/api/app/overdue-jobs",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },

                }
            )
                .then(res => res.json())
                .then(async (overDueData) => {
                    console.log(overDueData, 'THIS IS THE OVERDUE Job DATA');
                    console.log(overDueData[0].job_id, 'Category Data');
                    // dispatch(setUpcomingJobData(overDueData))
                    setOverDueDataList(overDueData)

                })

        }, 500)

        readData();

    }, [])



    const setStatusFilter = status => {
        if (status === "Upcoming") {
            setDataList(dataList);
            setStatusUP("Upcoming");
            setStatusOVER(null);
            console.log(statusUP, "IT THE UPCOMING STATUS ");
            console.log(dataList, "It is the Upcoming ");
        } else if (status === "Work in Progress") {
            setDataList(workInProgressdataList)
            console.log(dataList, "It is the WIP ");
            setStatusOVER(null);
            setStatusUP(null);
        } else if (status === "Overdue") {
            setDataList(overDueDataList)
            setStatusOVER('Overdue')
            setStatusUP(null);
            console.log(dataList, "It is the OD ");
            console.log(statusOVER, "IT THE OVERDUE STATUS ");
        }

        setStatus(status)
    }

    const renderItem = ({ item, index }) => {


        return (
            <View key={index} style={styles.itemContainer} >
                <View>
                    <JobCard
                        screenName={NavigationStrings.JOB_DETAIL_SCREEN}
                        orderId={item.order_id}
                        jobprogress={
                            statusUP !== null ? statusUP :
                                statusOVER !== null ? statusOVER :
                                    jobRole}
                        JobName={'Genral Servicing & Repairs'}
                        startDate={item.start_time}
                        VehiclType={item.category}
                        VehicleNumber={item.vehicle_number}
                        endDate={item.end_time}
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
                            onPress={() => { setStatusFilter(e.status) }

                            }
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