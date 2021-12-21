import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CheckInWraper } from './CheckInStyle';
import { windowHeight, windowWidth } from '../../Utils/Dimension';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import StepWiseForm from '../../src/components/StepWiseForm/StepWiseForm';

const CheckIn = props => {
 

  return (
    <>
      <CheckInWraper>
        <HeaderComponent
          goBack={() => props.navigation.goBack()}
          text="Check In Markings"
        />
        <StepWiseForm />
      </CheckInWraper>
    </>
  );
};

export default CheckIn;

const styles = StyleSheet.create({
  nextbutton: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#004A7F',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  nextbuttontext: {
    fontSize: 15,
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scrollViewStyle: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  StepCircleTouch: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  StepCircleTouchActive: {
    backgroundColor: 'pink',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
