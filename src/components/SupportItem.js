import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons';
import Login from '../../Screens/Login';
import { SupportItemView,SupportIcon,SupportText } from '../../styles/SupportStyle';
import { useNavigation } from '@react-navigation/native';




const SupportItem = (props) => {
    const navigation = useNavigation();
    return (
        <View>
         <SupportItemView   onPress={() => navigation.navigate(props.screenName)} >
                <SupportIcon  name={props.ItemIcon} size={25} color="#666" />
                <SupportText  >{props.itemTitle}</SupportText>
            </SupportItemView>
        </View>
    )
}

export default SupportItem
