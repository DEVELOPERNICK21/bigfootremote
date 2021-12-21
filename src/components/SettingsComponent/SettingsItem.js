import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SettingsItemView,SettingItemIcon,SettingItemText, SettingsImage, SettingsImageView } from '../../../Screens/Settings/SettingsStyle';
import ImagePath from '../../Constants/ImagePath';




const SettingsItem = (props) => {
    const navigation = useNavigation();
    return (
        <View>
        {props.onPressProp ? 
            <SettingsItemView  onPress={props.onPressProp}  >
                <SettingsImageView>
                     <SettingsImage source={props.ItemImage} />
                </SettingsImageView>
                <SettingItemText  >{props.itemTitle}</SettingItemText>
            </SettingsItemView>
                :
                <SettingsItemView  onPress={() => navigation.navigate(props.screenName)}  >
                <SettingsImageView>
                     <SettingsImage source={props.ItemImage} />
                </SettingsImageView>
                <SettingItemText  >{props.itemTitle}</SettingItemText>
            </SettingsItemView>
        }
        
        </View>
    )
}

export default SettingsItem
