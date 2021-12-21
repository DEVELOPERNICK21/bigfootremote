import styled from "styled-components";

export const RowStepWiseWrapper = styled.View`
padding: 0 5%;
flexDirection: row;
`;


export const RowStepProgressWrap = styled.View`
    flexDirection: column;
    marginBottom: 20;
    padding: 10px 0 20px 0;
    justifyContent: center;
    alignItems: center;
`;

export const RowStepNameAndCircle = styled.View`
    justifyContent: center;
    alignItems: center;
margin: 10px 20px 10px 20px;
`;

export const RowStepLine = styled.View`
backgroundColor: #000;
height: 2%;
margin: 2px;
position: absolute;
justifyContent: center;
alignSelf: center;
alignItems: center;
top: 45%;
/* left: 90%; */
width: 75%;
content: '';
`;

export const RowStepCircleTouch = styled.TouchableOpacity`
backgroundColor: #004A7F;
width: 40px;
height: 40px;
borderRadius: 40px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
`;


export const RowStepCircleTouchActive = styled.View`
backgroundColor: #AE282E;
width: 40px;
height: 40px;
borderRadius: 40px;
justifyContent:center;
alignContent: center;
alignItems: center;
alignSelf: center;
marginBottom: 5%;
border: 3px solid #fff;
`;


export const RowUpperCircle = styled.View`
backgroundColor: transparent;
width: 45px;
height: 45px;
borderRadius: 30px;
justifyContent:center;
alignSelf:center;
alignItems: center;
border: 3px solid #AE282E;
`;

export const RowStepTick = styled.Image`
`;

export const RowStepText = styled.Text`
fontFamily: "DMSans-Medium"
color: #004A7F;
`;

export const RowStepTextActive = styled.Text`
fontFamily: "DMSans-Medium"
color: #AE282E;
`;

export const RowTextMedia = styled.Text`
    fontFamily: "DMSans-Bold"
    color: #000;
`;

