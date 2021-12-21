import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { HeadderWrapper, TouchableIcon, HeaderText, HeaderRightText, RightTextTouchable } from './HeaderStyle'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const HeaderComponent = (
    {
        goBack = () => { },
        text,
        rightText,
        headerRightTextColor
    }
) => {
    return (
        <HeadderWrapper>
            <TouchableIcon onPress={!!goBack ? goBack : () => goBack} >
                <MaterialIcon name="keyboard-arrow-left" size={25} color="#979797" />
            </TouchableIcon>
            <HeaderText>{text}</HeaderText>
            {
                rightText ?
                    <RightTextTouchable>
                        <HeaderRightText secondPropcolor={headerRightTextColor}>{rightText}</HeaderRightText>
                    </RightTextTouchable>
                    : null

            }
            <Text />
        </HeadderWrapper>
    )
}

export default HeaderComponent
