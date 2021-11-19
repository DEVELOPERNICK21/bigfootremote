import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import ChatsItem from '../src/components/ChatsItem'
import { ChatWrapper} from '../styles/ChatsStyle'

const Chats = () => {
    return (
        <ChatWrapper>
          <ChatsItem />
          <ChatsItem />
          <ChatsItem />
          <ChatsItem />
          <ChatsItem />
          <ChatsItem />
        </ChatWrapper>
    )
}

export default Chats
