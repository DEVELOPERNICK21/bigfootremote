import React from 'react';
import {View, Text, Button, TextInput, Image} from 'react-native';
import {
  HomeWrapper,
  CalanderView,
  JobsView,
} from './HomeStyle';
import SearchJob from '../../src/components/HomeComponent/SearchJob';
import JobsSection from '../../src/components/HomeComponent/JobsSection';

const Home = ({navigation}) => {
  return (
    <HomeWrapper>
        <SearchJob  />
      <CalanderView>
        <Text>Calander</Text>
      </CalanderView>
      <JobsView>
        <JobsSection />      
      </JobsView>
    </HomeWrapper>
  );
};

export default Home;
