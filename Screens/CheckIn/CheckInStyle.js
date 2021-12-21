import styled from "styled-components";
import {windowHeight, windowWidth} from '../../Utils/Dimension';

export const CheckInWraper = styled.SafeAreaView`
flex: 1;
`;

export const StepWiseWrapper = styled.View`
padding: 0 5%;
`;


export const StepProgressWrap = styled.View`
    flexDirection: row;
    marginBottom: 20;
    padding: 10px 0 20px 0;
    justifyContent: center;
    alignItems: center;
`;

export const StepNameAndCircle = styled.View`
    justifyContent: center;
    alignItems: center;
margin: 10px 20px 10px 20px;
`;

export const StepLine = styled.View`
backgroundColor: #000;
height: 2%;
margin: 2px;
position: absolute;
justifyContent: center;
alignSelf: center;
alignItems: center;
top: 45%;
/* left: 90%; */
width: 75%;
content: '';
`;

export const StepCircleTouch = styled.TouchableOpacity`
backgroundColor: #004A7F;
width: 40px;
height: 40px;
borderRadius: 40px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
`;


export const StepCircleTouchActive = styled.View`
backgroundColor: #AE282E;
width: 40px;
height: 40px;
borderRadius: 40px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
border: 3px solid #fff;
`;


export const UpperCircle = styled.View`
backgroundColor: transparent;
width: 45px;
height: 45px;
borderRadius: 30px;
justifyContent:center;
alignSelf:center;
alignItems: center;
border: 3px solid #AE282E;
`;

export const StepTick = styled.Image`
`;

export const StepText = styled.Text`
fontFamily: "DMSans-Medium"
color: #004A7F;
`;

export const StepTextActive = styled.Text`
fontFamily: "DMSans-Medium"
color: #AE282E;
`;

export const TextMedia = styled.Text`
    fontFamily: "DMSans-Bold"
    color: #000;
`;

// TimeLine Styling

export const TimeLineWrapper = styled.View`
border: 1px solid #ddd;
borderRadius: 5px;
`;

export const StepAndTitleWrap = styled.View`
flexDirection: row;
`;

export const TimeLine = styled.View`
width: 20%;
`;

export const TimeLineSteps = styled.View`
width: 80%;
flexDirection: row;
/* padding: 0 0 10px 0; */
`;

export const TimeLineCircle = styled.View`
backgroundColor: #B3B3B3;
width: 25px;
height: 25px;
borderRadius: 14px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
`;

export const TimeLineCircleCompleted = styled.View`
backgroundColor: #0DAF4B;
width: 25px;
height: 25px;
borderRadius: 14px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
`;


export const NameAndTIme = styled.View`
    width: 65%;
`;

export const DownLine = styled.View`
backgroundColor: #B3B3B3;
height: 5%;
transform: ${props => (props.rotate =  `rotate(90deg)` )};
/* position: absolute; */
justifyContent: center;
alignSelf: center;
alignItems: center;
width: 50%;
content: '';
`;


export const BottomLine = styled.View`
backgroundColor: #ddd;
height: 2%;
position: absolute;
width: 100%;
content: '';
`;

// Interior styling 


export const InterioInputView = styled.View`
`;

export const InteriorTouchable = styled.TouchableOpacity`
backgroundColor: #fff;
padding: 15px;
borderRadius: 5px;
`;
export const InteriorText = styled.Text`
fontSize: 16px;
`;


//Modal styling


export const ModalToucable = styled.TouchableOpacity`
flex: 1;
alignItems: center;
justifyContent: center;
/* backgroundColor: red; */
`;

export const ModalView = styled.View`
backgroundColor: #fff;
borderRadius:10px;
windowHeight: 100%;
height: 250px;
width: ${windowWidth - 10};
height: ${windowHeight / 2};
`;

export const ModalScrollView = styled.ScrollView`
`;

export const OptionTouchable = styled.TouchableOpacity`
alignItems: flex-start;
`;

export const OptionText = styled.Text`
  margin: 20px ;
  fontSize: 20px;
  fontFamily: 'DMSans-Bold'
`;