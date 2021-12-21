import styled from 'styled-components';

export const QRScannerWrapper = styled.TouchableOpacity`
bottom: 90%;
width: 100%;
justify-content: center;
align-items: center;
position: absolute;
`;

export const QRView = styled.View`
flex-direction: row;
justify-content: space-evenly;
width: 30%;
background-color:#AE282E ;
align-items: center;
padding-left: 10px;
padding-right:10px;
border-radius: 150px;
height: 180%;
`;

export const QRText = styled.Text`
font-size: 14px;
color: #fff;
`;
