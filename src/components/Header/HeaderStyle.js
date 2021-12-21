import styled from 'styled-components';

export const HeadderWrapper = styled.View`
flex-direction: row;
align-items: center;
height: 8%;
`;

export const TouchableIcon = styled.TouchableOpacity`
margin: 0 0 0 10px ;
`;

export const HeaderText = styled.Text`
font-size: 20px;
font-family: "DMSans-Bold";
color: #AE282E;
margin: 0 10px;
flex: 3;
`;
export const RightTextTouchable = styled.TouchableOpacity`
`;

export const HeaderRightText = styled.Text`
    font-size: 15;
    font-family: "DMSans-Medium";
    color: ${props => props.secondPropcolor };
    margin: 0 10px;
`;
