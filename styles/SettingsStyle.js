import styled from 'styled-components';
import FeIcon from 'react-native-vector-icons/Feather';

export const SettingItem = styled.View`
 background-color: #fff;
  flex-direction: row;
  margin: 80px 30px 5px 30px ;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  background: #FFFFFF;
box-shadow: 0px 4px 4px #E5E5E5;
border-radius: 5px;
justify-content: space-between;
  `;


export const SettingHeadText = styled.Text`
  color: #AE282E;
  font-size: 15px;
  font-family: 'DMSans-Bold';
  `;

export const SettingLogoWrap = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 110px;
  bottom: 15px;
  `;

export const SettingsLogo = styled.Image`
  width: 55px;
  height: 55px;
  position: absolute;
  `;

