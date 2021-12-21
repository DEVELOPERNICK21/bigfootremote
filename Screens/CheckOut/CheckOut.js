import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { ProfileWrapper,UpdateText} from '../Profile/ProfileStyle'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Interior from '../../src/components/CheckIn/Interior'
import Exterior from '../../src/components/CheckIn/Exterior'
import Media from '../../src/components/CheckIn/Media'
import OtherItems from '../../src/components/CheckIn/OtherItems'
import { CheckOutWrapper } from './CheckOutStyle';
import {windowHeight, windowWidth} from '../../Utils/Dimension';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import StepWiseForm from '../../src/components/StepWiseForm/StepWiseForm';


const CheckOut = (props) => {
    return (
        <>
        <CheckOutWrapper>
        <HeaderComponent
          goBack={() => props.navigation.goBack()}
          text="Check Out Markings"
        />
        <StepWiseForm />
        </CheckOutWrapper>
        
        </>
    )
}

export default CheckOut


const styles = StyleSheet.create({
    nextbutton: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#004A7F',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      shadowColor: 'rgba(46, 229, 157, 0.4  )',
      shadowOpacity: 1.5,
      elevation: 8,
      shadowRadius: 20 ,
      shadowOffset : { width: 1, height: 13},
    },
      nextbuttontext: {
        fontSize: 15,
        color: '#ffffff',
        fontFamily: 'DMSans-Bold',
        textTransform: 'uppercase',
        letterSpacing:1,
      },
    });