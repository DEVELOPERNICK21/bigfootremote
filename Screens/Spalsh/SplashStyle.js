import styled from "styled-components";
import {windowHeight, windowWidth} from '../../Utils/Dimension';




export const SplashWrapper = styled.SafeAreaView`
background-color: #FFFFFF;
flex: 1;
justify-content: space-around;
align-items: center;
padding:  25px;
`;

export const LogoConatiner = styled.View`
margin-top: 40%;
width:180px;
height: 180px;
`;

export const SplashScreenLogo = styled.Image`
margin: 0 auto;
width: 100%;
height: 80%;
`;
