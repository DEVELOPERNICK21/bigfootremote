import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ChatsItem from '../../src/components/ChatsItem';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import NavigationStrings from '../../src/Constants/NavigationStrings';
import {ChatWrapper,ChatScroller} from './ChatsStyle';

const Chats = props => {
  return (
    <ChatWrapper>
      <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="My Chats"
      />
      <ChatScroller>
        <ChatsItem />
        <ChatsItem />
        <ChatsItem />
        <ChatsItem />
        <ChatsItem />
        <ChatsItem />
      </ChatScroller>
    </ChatWrapper>
  );
};

export default Chats;
