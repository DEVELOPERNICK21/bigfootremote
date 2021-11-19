import styled from 'styled-components'

export const InstallerWrap = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #F5F5F5;
    `;

export const InstallerArea = styled.View`
    padding: 0 20px;
    `;

export const InstallerText = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    align-items: center;
    `;

export const InsallerHeading = styled.Text`
font-weight: 500;
color: #004A7F;
font-size: 15px;
`;

export const InsallerSubHeading = styled.Text`
    color: #C4C4C4;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1px;
    `;

export const InstallerImages = styled.View`
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;

export const ImageArea = styled.View`
background-color: #fff;
min-width: 90px;
min-height: 90px;
border-radius: 5px;
margin: 10px;
border: 1px solid #ddd;

`;
export const InstallerImg = styled.Image`
width: 90px;
height: 90px;
border-radius: 2px;
border: 1px solid #ddd;
`;

export const AddImage = styled.TouchableOpacity`
margin: 10px ;
width: 90px;
height: 90px;
border-radius: 5px;
justify-content: center;
align-items: center;

`;

export const AddImgText = styled.Text`
font-size: 10px;
padding: 5px;
font-family: 'DMSans-Bold';
color: #004A7F;

`;

export const CustomerText = styled.Text`
    padding: 10px;
    font-size: 16px;
    text-decoration: underline #004A7F solid ;
    color: #004A7F;
    `;

