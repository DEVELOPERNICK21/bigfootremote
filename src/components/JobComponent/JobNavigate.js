import React from 'react'
import { View, Text } from 'react-native'
import { NavigateJobDetail,CardUpper,NavigateArea, CollectText,Colectandarrow} from '../../../Screens/JobDetails/JobDetailStyle';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const JobNavigate = (props) => {
    const navigation = useNavigation();
    return (
        <NavigateJobDetail  onPress={() => navigation.navigate(props.screenName)} >
        <CardUpper>
            <NavigateArea>{props.JobName}</NavigateArea>
            <Colectandarrow>
            {props.toCollect ? <CollectText>{props.toCollect}</CollectText> : null }
            <MaterialIcon name="keyboard-arrow-right" size={25} color="#777" />
            </Colectandarrow>
        </CardUpper>
        </NavigateJobDetail>
    )
}

export default JobNavigate
