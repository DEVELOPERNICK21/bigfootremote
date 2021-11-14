import React from 'react';
import FormButton from '../src/components/FormButton';

import {RemarkWrap, RemarkInput} from '../styles/RemarkStyle';

const InstallerRemarks = () => {
  return (
    <RemarkWrap>
      <RemarkInput
        multiline
        numberOfLines={2}
        placeholder="Write in brief about accessories,warning lights on etc."
        backgroundColor="#fff"
      />
      <FormButton
        buttonTitle="Submit"
        onPress={() => {
          props.navigation.navigate('terms');
        }}
      />
    </RemarkWrap>
  );
};

export default InstallerRemarks;
