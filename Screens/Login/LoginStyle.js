import styled from 'styled-components';

export const LoginWrapper = styled.SafeAreaView`
  flex: 1;
  alignitems: center;
  justifyContent:center;
  `;

export const LoginWrapContent = styled.View`
  backgroundcolor: '#F5F5F5';
  display: flex;
  padding: 30px;
  justifyContent: center;
  alignItems: center;
  `;

export const LoginLogoTextWrap = styled.View`
backgroundcolor: 'red';
justifyContent: center;
alignItems: center;
width: 100%;
`;

export const LoginLogo = styled.Image`
display: flex;
width: 100px;
height: 100px;
/* backgroundSize: contain; */
/* resizemode: contain; */
`;

export const LoginTextWrapper = styled.View`
  width: 200px;
  margin: 15px;
  marginbottom: 30px;
`;

export const LoginText = styled.Text`
alignItems: center;
textAlign: center;
fontSize: 25px;
fontFamily: 'DMSans-Bold';
color: #AE282E;
`;

export const LoginTextDiscription = styled.Text`
fontFamily: 'DMSans-Bold';
alignItems: center;
textAlign: center;
`;

export const ForgotTouchable = styled.TouchableOpacity`
`;

export const ForgotText = styled.Text`
margin: 15px;
color: #AE282E;
`;
