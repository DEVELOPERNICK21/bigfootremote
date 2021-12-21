import styled from 'styled-components';

export const ChatWrapper = styled.SafeAreaView`
flex:1;
`;
export const ChatScroller = styled.ScrollView`

`;

export const ChatItem = styled.TouchableOpacity`
background-color: #fff;
box-sizing: border-box;
width: 90%;
margin: 20px auto;
border-radius: 5px;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 10px;
`;

export const ChatUserImage = styled.Image`
width: 50px;
height: 50px;
`;

export const GreenDot = styled.View`
background-color: #27AE60;
height:15px;
width:15px;
position: absolute;
left: 35px;
top: 35px;
border: 2px solid #fff;
border-radius: 50px;
`;

export const ImageChatArea = styled.View`
`;

export const NameMessageArea = styled.View`
width: 70%;
padding: 0 15px;
justify-content: center;
`;

export const TimeCount = styled.View`
justify-content: center;
align-items: center;
`;

export const Count = styled.Text`
justify-content: center;
align-items: center;
background-color: #004A7F;
color: #fff;
padding: 0 6px;
border-radius: 100px;
`;

export const ChatName = styled.Text`
font-weight: bold;
`;


