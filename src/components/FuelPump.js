import React, { useRef } from 'react'
import {
    CardUpper,
    JobDetails,
    JobName,
    JobDate,
    JobOtherDetail,
    StartDate,
    CardTextBlack,
    CardTextGrey,
    UpperText,
    JobButtonArea,
    JobButton,
    JobButtonText,
    EngineImage,
    EngineImageView,
    FuelCardText,
    FuelCardArea,
} from '../../Screens/JobDetails/JobDetailStyle';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';


const FuelPump = (props) => {
    const navigation = useNavigation();

    return (
        <FuelCardArea onPress={() => navigation.navigate(props.ScreenName)} >
            <CardUpper>
                <EngineImageView>
                    <EngineImage source={require('../assets/Images/FuelImage/Fuelpump.png')} />
                    <JobName>{props.JobName}</JobName>
                </EngineImageView>
                {props.IconName === "keyboard-arrow-right" ?
                    <MaterialIcon name={props.IconName ? props.IconName : null} size={25} color="#777" /> :
                    <AntIcon name={props.IconName} size={20} color="#004A7F" />
                }

            </CardUpper>
            <JobDetails>
                <JobDate>
                    <StartDate>
                        <UpperText>
                            <CardTextGrey>Status</CardTextGrey>
                            <FuelCardText>{props.toCollect}</FuelCardText>
                        </UpperText>
                    </StartDate>
                </JobDate>
                <JobOtherDetail>
                </JobOtherDetail>
            </JobDetails>
            <JobDetails>
                <JobDate>
                    <StartDate>
                        <UpperText>
                            <CardTextGrey>Materials Requested on</CardTextGrey>
                            <CardTextBlack>{props.RequestedDate}</CardTextBlack>
                        </UpperText>
                    </StartDate>
                </JobDate>
                <JobOtherDetail>
                    <UpperText>
                        <CardTextGrey>Materials Collected on</CardTextGrey>
                        <CardTextBlack>{props.CollectionDate}</CardTextBlack>
                    </UpperText>
                </JobOtherDetail>
            </JobDetails>
            {props.collect && props.Return ?
                <JobButtonArea>
                    <JobButton
                        bgColor={'#004A7F'}
                    >
                        <JobButtonText>{props.collect}</JobButtonText>
                    </JobButton>
                    <JobButton
                        bgColor={'#AE282E'}
                    >
                        <JobButtonText>{props.Return}</JobButtonText>
                    </JobButton>
                </JobButtonArea>
                : null}


        </FuelCardArea>
    );
};

export default FuelPump;
