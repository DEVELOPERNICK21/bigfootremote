import styled from "styled-components";


export const DashboardWrapper = styled.ScrollView`
flex: 1;
/* background-color: red; */
/* align-items: center; */
`;

export const DateTouchable = styled.TouchableOpacity`
background-color: #fff;
flex-direction: row;
padding: 15px;
width: 90%;
margin: 10px auto;
justify-content: space-between;
align-items: center;
border-radius: 2px;
shadowColor: '#000';
shadowOpacity: 0.5px;
shadowRadius: 5px;
elevation: 8px;
`;

export const DateText = styled.Text`
color: #777;
font-family: 'DMSans-Regular';
`;

export const OverViewWrapper = styled.View`
    /* background-color: green; */
`;

export const JobsHeading = styled.Text`
    padding: 10px;
    color: #000;
    font-size: 15px;
    font-family: 'DMSans-Bold';
`;

export const PieView = styled.View`
    background-color: #fff;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Guage = styled.View`
    position: absolute;
    width: 100px;
    height: 160px;
    align-items: center;
    justify-content: center;
`;

export const GuageText = styled.Text`
    background-color: transparent;
    color: #02A0FC;
    font-size: 20px;
    font-family: 'DMSans-Bold';
`;

export const CircularView = styled.View`
    background-color: #fff;
    margin: 10px;
    border-radius: 5px;
`;

export const CircleIndicator = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CircleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const JobCircle = styled.View`
background-color: ${props => props.bgColor ? props.bgColor : "red"};
padding: 8px;
width: .5px;
border: .5px solid #E0E0E0;
border-radius: 50px;
margin: 5px;
`;

export const CircleText = styled.Text`
font-size: 12px;
color: #000;
font-family: "DMSans-Bold";
`;


export const GraphWrapper = styled.View`
background-color: #fff;
margin: 10px;
padding: 10px;
border-radius: 5px;
justify-content: center;
`;

export const HoursWork = styled.Text`
color: #000;
margin: 5px;
padding: 5px;
font-size: 15px;
font-family: "DMSans-Bold";
`;

export const BottomPopUp = styled.Text`
flex: 1;
color: #000;
margin: 15px 20px 0 20px;
padding: 5px;
font-size: 15px;
font-family: "DMSans-Bold";
`;
