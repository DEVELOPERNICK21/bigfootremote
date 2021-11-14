import React from 'react';
import {View, Text} from 'react-native';

import {CustomerRemarkWrap, CustomerText} from '../styles/CustomerRemarkStyle';

const CustomerRemarks = () => {
  return (
    <>
      <CustomerRemarkWrap>
        <CustomerText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus mi
          sed fermentum at aliquam sed magna. Sodales ullamcorper nunc sem sed
          lobortis tristique. Lacus nec tortor facilisis ullamcorper sed sed
          nunc. Est tellus, diam, nulla vitae.
        </CustomerText>
      </CustomerRemarkWrap>
    </>
  );
};

export default CustomerRemarks;
