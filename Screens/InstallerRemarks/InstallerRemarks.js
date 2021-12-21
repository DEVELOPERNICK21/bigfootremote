import React from 'react';
import { TextInput } from 'react-native';
import FormButton from '../../src/components/FormButton';
import HeaderComponent from '../../src/components/Header/HeaderComponent';

import { RemarkWrap, RemarkInput, RemarkPadding } from './RemarkStyle';

const InstallerRemarks = (props) => {
  return (
    <RemarkWrap>
      <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="Installer Remarks"
      />
      <RemarkPadding>
        {
          Platform.OS === 'ios' ?
            <RemarkInput
              multiline={true}
              numberOfLines={10}
              placeholderTextColor="#979797"
              placeholder="Write in brief about accessories,warning lights on etc."
              backgroundColor="#fff"
            />
            :
            <TextInput multiline={true}
              style={{ textAlignVertical: 'top', padding: 10, color: ' #979797', borderWidth: 1, borderStyle: 'solid', borderColor: '#ddd', borderRadius: 5 }}
              numberOfLines={15}
              placeholderTextColor="#979797"
              placeholder="Write in brief about accessories,warning lights on etc."
              backgroundColor="#fff" />
        }

        <FormButton
          buttonTitle="Submit"
          onPress={() => {
            props.navigation.navigate('terms');
          }}
        />
      </RemarkPadding>
    </RemarkWrap>
  );
};

export default InstallerRemarks;


