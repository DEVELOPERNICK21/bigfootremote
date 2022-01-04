import React, {useEffect} from 'react';
import {View, Text, Button, TextInput, Image, Alert} from 'react-native';
import {
  HomeWrapper,
  CalanderView,
  JobsView,
} from './HomeStyle';
import SearchJob from '../../src/components/HomeComponent/SearchJob';
import JobsSection from '../../src/components/HomeComponent/JobsSection';
import CalendarStrip from 'react-native-calendar-strip';
import AsyncStorage from '@react-native-async-storage/async-storage';


const allDate = new Date().toLocaleString()


// const ShowCurrentDate=()=>{
 
      var date = new Date().getDate();
      var month = new Date().getMonth() ;
      var year = new Date().getFullYear();
 
      const SelectedDate = (year + '-' + month + '-' + date);


      // Alert.alert(SelectedDate);
      // Alert.alert(year + '-' + month + '-' + date);
 
    //  }


const Home = ({navigation}) => {

  
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
        console.log(userToken, 'AUTHTOKEN FROM HOME PAGE IS BRINGS A MESSAGE');

  fetch("https://bigfoot.reddotapps.com.sg/api/app/home-page", 
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}`
    },
    body:JSON.stringify({
      "date":SelectedDate,
    })
  }
  )
  .then(res => res.json())
  .then(async(data)=>{
    console.log(data, 'THIS IS THE HOME DATA');
  })

}, 500)

}, [])

  return (
    <HomeWrapper>
        <SearchJob  />
      <CalanderView>
      <CalendarStrip
      scrollable={true}
      startingDate={allDate}
      selectedDate={allDate}
      // selectedDate={'2021-12-18T08:02:17-05:00'}
      highlightDateContainerStyle={{backgroundColor: '#004A7F',}}
      highlightDateNameStyle={{color: '#fff',}}
      highlightDateNumberStyle={{color: '#fff',}}
      dayComponentHeight={60}
      leftSelector={[]}
      rightSelector={[]}
      style={{height:100,justifyContent: 'center',}}
      // innerStyle={{ height: 100 }}
      dayContainerStyle={{backgroundColor: '#E0E5EC', borderRadius: 5,marginRight: 10,}}
      calendarHeaderStyle={{color: '#1F5F8E'}}
      dateNumberStyle={{color: '#1F5F8E'}}
      dateNameStyle={{color: '#1F5F8E'}}
      iconContainer={{backgroundColor: 'red', width: 0,height: 0}}
    />
      </CalanderView>
      <JobsView>
        <JobsSection />      
      </JobsView>
    </HomeWrapper>
  );
};

export default Home;
