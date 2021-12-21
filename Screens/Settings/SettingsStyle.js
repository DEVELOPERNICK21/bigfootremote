import styled from 'styled-components';
import FeIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';


export const SettingWrapper = styled.SafeAreaView`
  flex: 1;
  `;

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
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 42%;
  bottom: 30%;
  `;

export const SettingsLogo = styled.Image`
  width: 60%;
  height: 60%;
  position: absolute;
  `;



export const SettingsItemView = styled.TouchableOpacity`
  background-color: #fff;
  flex-direction: row;
  margin: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 5px;
  padding: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  justify-content: flex-start;
  align-items: center;
`;

export const SettingItemIcon = styled(IonIcon)`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  color: #004a7f;
  text-align: center;
`;

export const SettingItemText = styled.Text`
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'DMSans-Medium';
  font-size: 14px;
`;

export const SettingsImageView = styled.View`
backgroundColor: #F5F5F5;
borderRadius: 5px;
padding: 10px;
`;

export const SettingsImage = styled.Image`
/* backgroundColor: #F5F5F5; */
`;


