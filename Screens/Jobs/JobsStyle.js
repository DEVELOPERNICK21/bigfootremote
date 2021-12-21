import styled from "styled-components";



export const JobSWrapper = styled.SafeAreaView`
flex: 1;
padding: 0 10px;
justify-content: center;
`;

export const CategoryView = styled.View`
/* flex-direction: row;
margin-bottom: 20px; */
flex-direction: row;
align-self: center;
width: 100%;
background-color: #fff;
border: 1px solid #dddd;
justify-content: space-between;
align-items: center;
border-radius: 20px;
`;

export const CatText = styled.Text`
color: #8C8C8C;
`;

export const JobCategoryWrapper = styled.View`
padding: 0 15px;
flex: 1;
`;

export const CategoryWrapper = styled.View`
flex-direction: row;
background-color: #fff;
border: 1px solid #dddd;
justify-content: space-between;
align-items: center;
border-radius: 20px;
`;

export const CategoryText= styled.Text`
background-color: ${props => props.bgcolor ? props.bgcolor : "red"};
color: ${props => props.color ? props.color : "green"};
font-family: 'DMSans-Regular';
 /* &.active {
    border: blue;
  } */

`;

export const CategorySelectText= styled.Text`
color: #fff;
font-family: 'DMSans-Bold';
`;
