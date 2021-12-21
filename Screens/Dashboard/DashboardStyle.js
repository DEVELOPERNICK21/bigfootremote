import styled from "styled-components";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'




export const DashboardWrapper = styled.SafeAreaView`
flex: 1;
`;

export const DashboardContentWrapper = styled.ScrollView`

`;

export const DateTouchable = styled.TouchableOpacity`
background-color: #fff;
flex-direction: row;
padding: 15px;
width: 90%;
margin: 20px auto;
justify-content: space-between;
align-items: center;
border-radius: 2px;
shadowColor: '#000';
shadowOpacity: 0.5;
shadowRadius: 5px;
elevation: 8;
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

export const PieBackground = styled.View`
    width: 80px;
    margin: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.secondPropcolor };
    border-radius: 250px;
`;

export const GuageText = styled.Text`
    background-color: transparent;
    color:  ${props => props.textColor };
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
/* background-color: red; */
margin: 10px;
padding: 10px;
border-radius: 5px;
justify-content: center;
`;

export const HoursWork = styled.Text`
color: #000;
margin: 5px ;
padding: 5px;
font-size: 15px;
font-family: "DMSans-Bold";
`;

export const BottomView = styled.View`

`;
export const BottomPopUp = styled.View`
flex: 1;
color: #000;
margin: 15px 20px 0 20px;
padding: 5px;
font-size: 15px;
font-family: "DMSans-Bold";
`;

export const SelectRadio = styled.View`
`;

export const RowItem = styled.View`
flex-direction: row;
text-align: center;
justify-content: space-between;
padding: 10px;
`;

export const SelectCustomDate = styled.View`
padding: 15px 0 ;
`;

export const FilterText = styled.Text`
font-size: 20px;
color: #000;
font-family: 'DMSans-Bold';
padding: 0 0 0 10px ;
`;

export const PopUpHeading = styled.Text`
font-size: 16px;
color: #000;
font-family: 'DMSans-Medium';
padding: 0 0 0 10px ;
`;

export const RadioStyle = styled.View`
flex-wrap: wrap;
align-items: center;
width: 100%;
padding: 1px;
flex-direction: row;
`;
export const RadioStyleColumn = styled.View`
flex-wrap: wrap;
align-items: center;
width: 100%;
padding: 5px;
flex-direction: column;
`;

export const PopUpBottomLine = styled.View`
min-width: 100%;
background-color:#ddd;
padding: 1px;
`;

export const RadioGroupStyle = styled.View`
flex-direction: row;
align-items: center;
`;

export const RadioText = styled.Text`
color: #000;
font-family: 'DMSans-Regular';
padding: 5px;
`;

export const CustomDatePicker = styled.View`
flex-direction: row;
`;

export const DateHeadingText = styled.Text`
color: #000;
font-family: 'DMSans-Bold';
`;

export const CustomDateTouchable = styled.TouchableOpacity`
background-color: #F5F5F5;
flex-direction: row;
padding: 10px;
width: 45%;
margin: 10px auto;
justify-content: space-between;
align-items: center;
border-radius: 2px;
`;


export const BSWrapper = styled.View`
background-color: #F5F5F5;
flex-direction: row;
justify-content: center;
box-sizing: border-box;
`;

export const BSButton = styled.TouchableOpacity`
background-color: ${props => props.bgcolor ? props.bgcolor : "white"};
padding: 10px 50px;
margin: 10px;
border-radius: 10px;
`;

export const BSText = styled.Text`
color: ${props => props.color ? props.color : "#000"};
`;


