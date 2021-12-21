import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { ChatItem,ChatUserImage,GreenDot,ImageChatArea,NameMessageArea,TimeCount, Count,ChatName } from '../../Screens/Chats/ChatsStyle'

const ChatsItem = () => {
    return (
            <ChatItem>
                <ImageChatArea>
                    <ChatUserImage source={require('../assets/Images/UserImage/ChatUser.png')} />
                    <GreenDot></GreenDot>
                </ImageChatArea>
                <NameMessageArea>
                    <ChatName>Gunther Beard</ChatName>
                    <Text>Quisque blandit arcu quis turpis tincidunt facilisis…</Text>
                </NameMessageArea>
                <TimeCount>
                    <Text>32 min</Text>
                    <Count>2</Count>
                </TimeCount>
            </ChatItem>        
    )
}

export default ChatsItem
