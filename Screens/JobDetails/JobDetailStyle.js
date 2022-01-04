import styled from 'styled-components';
import {windowHeight, windowWidth} from '../../Utils/Dimension';

export const DetailJobWrapper = styled.SafeAreaView`
flex: 1;
`;

export const DetailScrollView = styled.ScrollView`
padding: 5% 5% 20% 5%;
`;

export const JobNumberArea = styled.View`
background-color: #E0E5EC;
flex-direction: row;
justify-content: space-between;
padding: 5px 10px;
border-radius: 5px;
`;

export const JobHexNumber = styled.Text`
color: #000;
`;

export const JobStatusText = styled.Text`
color: #27AE60;
`;

export const JobMainStatus = styled.View`
flex-direction: row;
`;

export const CardArea = styled.View`
background-color: #fff;
margin: 5px 0px;
border-radius: 5px;
padding: 0px 10px;
`;

export const FuelCardArea = styled.TouchableOpacity`
background-color: #fff;
margin: 10px 0px;
border-radius: 5px;
padding: 0px 10px;
`;

export const FuelCardAreaNNT = styled.View`
background-color: #fff;
margin: 10px 0px;
border-radius: 5px;
padding: 0px 10px;
`;

export const NavigateJobDetail = styled.TouchableOpacity`
background-color: #fff;
margin: 5px 0px;
border-radius: 5px;
padding: 0px 10px;
`;

export const CardUpper = styled.View`
/* background-color: pink; */
justify-content: space-between;
align-items: center;
text-align: center;
flex-direction: row;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 5px;
`;

export const JobName  = styled.Text`
    font-family: 'DMSans-Bold';
    font-size: 16px;
    color: #000;
    `;


export const EngineImageView = styled.View`
flex-direction: row;
align-items: center;
    `;

export const EngineImage = styled.Image`
width:30px;
height:30px;
    `;


export const NavigateArea  = styled.Text`
    font-family: 'DMSans-Regular';
    font-size: 14px;
    color: #000;
    padding: 10px 0;
    `;

export const Colectandarrow  = styled.View`
    flex-direction: row;
    align-items: center;
    `;

export const CollectText  = styled.Text`
    font-family: 'DMSans-Regular';
    font-size: 12px;
    color: #AE282E;
    padding: 10px 0;
    `;


export const JobStatus  = styled.Text`
    background-color: #FFF5E1;
    font-family: 'DMSans-Regular';
    font-size: 12px;
    padding: 2px 5px;
    color: #FFB200;
    border-radius: 5px;
    `;



export const JobDate = styled.View`
/* background-color: firebrick; */
justify-content: space-between;
width: 45%;
`;


export const StartDate = styled.View`
/* background-color: firebrick; */
flex-direction: row;
justify-content: space-between;
`;


export const UpperText = styled.View`
/* background-color: red; */
padding: 5px 0;
`;

export const JobOtherDetail = styled.View`
/* background-color: orange; */
justify-content: space-between;
width: 50%;
`;



export const CardTextGrey = styled.Text`
font-size: 10px;
line-height: 16px;
font-family: 'DMSans-Regular';
color: #777;
`;

export const CardTextBlack = styled.Text`
font-size: 10px;
line-height: 16px;
font-family: 'DMSans-Medium';
color: #000;
`;

export const FuelCardText = styled.Text`
font-size: 10px;
line-height: 16px;
font-family: 'DMSans-Medium';
color: #AE282E;
`;



export const TimeLine = styled.View`
flex-direction: row;
margin: 5px 10px 0 0;
/* bottom: 10px; */
justify-content: center;
align-items: center;
`;


export const NavigateView = styled.View`
margin-bottom: 40%;
`;


export const GreyCircle = styled.View`
background-color: #F2F2F2;
height: 8px;
width: 8px;
border: .5px solid #E0E0E0;
border-radius: 50px;
margin: 5px;
`;

export const Dash = styled.View`
background-color: #E0E0E0;
height: 1px;
margin: 2px;
width: 6px;
content: '';
`;


export const BlueCircle = styled.View`
background-color: #2672AB;
height: 8px;
width: 8px;
margin: 5px;
border: .5px solid #004A7F;
border-radius: 50px;
content: '';
`;


export const DownText = styled.View`
/* background-color:#fff; */
padding: 5px 0;
`;


export const JobDetails = styled.View`
/* background-color: peachpuff; */
flex-direction: row;
width: 100%;
padding: 5px 0px;
`;

export const JobBottomLine = styled.View`
background-color: #dddd;
width: 70%;
padding: .5px 0px;
`;

export const JobButtonArea = styled.View`
flex-direction: row;
padding: 5px;
justify-content: space-evenly;
align-items: center;
width: 100%;
margin: 0 auto;
bottom: -5%;
`;

export const JobButton = styled.TouchableOpacity`
background-color: ${props => props.bgColor ? props.bgColor : "#000"};
border-radius: 20px;
padding: 5px 15px;
`;

export const JobButtonText = styled.Text`
color: ${props => props.Color ? props.Color : "#fff"};
font-family: "DMSans-Regular";
`;

export const TimeLineStatusWrapper = styled.View`
background-color: #fff;
border-radius: 5px;
padding: 10px 10px;
margin: 10% 0;
`;

export const IndicatorContainer = styled.View`
background-color: #fff;
backgroundColor: 'red';
/* background-color: magenta; */
min-height:250px ;
width: 90%;
justify-content: flex-start;
/* align-items: center; */
padding: 20px;
margin: 10px;
elevation: 2;
border-radius: 5px;
`;

export const OtherDetail = styled.View`
width: 80%;
height: 80%;
`;

export const TextWrapper = styled.View`
width: 100%;
height: 100%;

`;

export const RowLabelStatus = styled.View`
flex-direction: row;
margin: 10px;
`;

export const StatusHeading = styled.Text`
text-align:center;
color: #000;
font-size: 12px;
font-family: "DMSans-Medium";
padding: 0 10px 0  0;
`;

export const StatusTime = styled.Text`
color: #777;
font-family: "DMSans-Regular";
font-size: 10px;

`;

export const TimelineBottomLine = styled.View`
background-color: #ddd;
padding: .5px 10px;
`;


export const RowTimeLineWrapper = styled.View`
border: 1px solid #ddd;
borderRadius: 5px;
padding: 10px 0;
`;

export const RowStepAndTitleWrap = styled.View`
flexDirection: row;
`;

export const RowTimeLine = styled.View`
width: 20%;
`;

export const RowTimeLineSteps = styled.View`
width: 80%;
flexDirection: row;
padding: 0 0 15px 0;
`;

export const RowTimeLineCircle = styled.View`
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

export const RowTimeLineCircleCompleted = styled.View`
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


export const RowNameAndTIme = styled.View`
    width: 65%;
    `;

export const RowDownLine = styled.View`
backgroundColor: #B3B3B3;
height: 5%;
transform: ${props => (props.rotate =  `rotate(90deg)` )};
/* position: absolute; */
justifyContent: center;
alignSelf: center;
alignItems: center;
bottom: 5%;
width: 81%;
content: '';
`;


export const RowBottomLine = styled.View`
backgroundColor: #ddd;
height: 2%;
position: absolute;
width: 100%;
content: '';
`;

export const RowStepTick = styled.Image`
`;