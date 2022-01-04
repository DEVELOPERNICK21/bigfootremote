import styled from 'styled-components';

export const HomeWrapper = styled.SafeAreaView`
flex:1;
`;

export const SearchView = styled.View`
height: 12%;
flex-direction: row;
justify-content: center;
align-items:center;
`;
export const SearchArea = styled.View`
background-color: #fff;
flex-direction: row;
align-items: center;
width: 70%;
padding: 0 10px;
margin: 5px;
border-radius: 5px;
shadowColor: '#000';
shadowOpacity: 0.5;
shadowRadius: 5px;
elevation: 8;`;

export const SearchInput = styled.TextInput`
width: 90%;
padding: 10px 15px;
`;

export const FilterArea = styled.TouchableOpacity`
background-color: #004A7F ;
justify-content: center;
align-items: center;
width: 15%;
margin: 10px;
padding: 14px 15px;
border-radius: 5px;
`;

export const CalanderView = styled.View`
height: 12%;
margin: 0 10px;
`;

export const JobsView = styled.ScrollView`
/* background-color: purple; */
height: 70%;
padding: 10px;
`;

export const JobsUpperArea = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const JobUpperText = styled.Text`
font-size: 20px;
font-family: 'DMSans-Bold';
color: #004A7F;
`;

export const ShowAllJob = styled.TouchableOpacity`
`;

export const JobAll = styled.Text`
font-size: 15px;
font-family: 'DMSans-Regular';
color: #AE282E;
`;

export const JobName  = styled.Text`
    font-family: 'DMSans-Bold';
    font-size: 13px;
    color: #004A7F;
    `;

export const JobStatus  = styled.Text`
    background-color: ${props =>  
        props.forColor === 'Work in Progress' ?  '#FFF5E1' 
        :  props.forColor === 'Overdue' ? '#FFF1F0' 
        :  props.forColor === 'Upcoming' ? '#EFFBF0'
        : '#fff'
    };
    color: ${props =>  
        props.forColor === 'Work in Progress' ?  '#FFB200' 
        :  props.forColor === 'Overdue' ? '#FF3A29' 
        :  props.forColor === 'Upcoming' ? '#27AE60'
        : '#000'
    };
    font-family: 'DMSans-Regular';
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 5px;
    `;

export const CardArea = styled.TouchableOpacity`
/* background-color: yellow; */
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

export const JobDetails = styled.View`
/* background-color: peachpuff; */
flex-direction: row;
width: 100%;
padding: 5px 0px;
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

export const UpperText = styled.View`
/* background-color: red; */
padding: 5px 0;
`;

export const DownText = styled.View`
/* background-color:#fff; */
padding: 5px 0;
`;

export const TimelineImage = styled.Image`
width: 80px;
`;

export const JobDate = styled.View`
/* background-color: firebrick; */
justify-content: space-between;
width: 50%;
`;

export const StartDate = styled.View`
flex-direction: row;
justify-content: space-between;
`;

export const JobOtherDetail = styled.View`
/* background-color: orange; */
justify-content: space-between;
width: 50%;
`;


export const TimeLine = styled.View`
flex-direction: row;
padding-right: 10px;
margin: 5px 10px 0 0;
bottom: 10px;
justify-content: center;
align-items: center;
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


