import React, { useRef } from 'react'
import { View, Text, Image } from 'react-native'
import {
    CardArea,
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
    FuelCardAreaNNT,
} from '../../Screens/JobDetails/JobDetailStyle';
import { DateTouchable,DateText } from '../../Screens/Dashboard/DashboardStyle';
import BottomSheet from './Dashborad/BottomSheet/BottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FuelBottomPopUp from '../../Screens/Material/FuelBottomPopUp';


const FuelCollectReturn = (props) => {
    const navigation = useNavigation();
    const refRBSheet = useRef();

    return (
        <FuelCardAreaNNT onPress={() => navigation.navigate(props.ScreenName)} >
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
                <JobButtonArea >
                    <JobButton
                        bgColor={'#004A7F'}
                        onPress={() => refRBSheet.current.open()}

                    >
                        <JobButtonText>{props.collect}</JobButtonText>
                       
          </JobButton>
                    <JobButton
                        bgColor={'#AE282E'}
                        onPress={() => refRBSheet.current.open()}
                    >
                 
        <RBSheet
         
          ref={refRBSheet}
          height={200}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(32, 32, 32, 0.5)'

            },
            draggableIcon: {
              backgroundColor: "#DADCE5",
              width: 100,
            }
          }}
        >
            <FuelBottomPopUp closeIt={() => refRBSheet.current.close()} />
        </RBSheet>
                        <JobButtonText>{props.Return}</JobButtonText>
                    </JobButton>
                </JobButtonArea>
                : null}
        </FuelCardAreaNNT>
    );
};

export default FuelCollectReturn;
