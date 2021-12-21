import styled from 'styled-components';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const SupportWrap = styled.SafeAreaView`
  flex: 1;
`;

export const SupportItemView = styled.TouchableOpacity`
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

export const SupportIcon = styled(IonIcon)`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  color: #004a7f;
  text-align: center;
`;

export const SupportText = styled.Text`
  color: #000;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'DMSans-Medium';
  font-size: 14px;
`;

export const SettingsImage = styled.Image`
`;
