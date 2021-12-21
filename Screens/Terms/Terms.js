import React from 'react';
import {View, Text, Button, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderComponent from '../../src/components/Header/HeaderComponent';
import { TermsWrap, TextPara,TermsContentWrap } from './TermsStyle';

const Terms = (props) => {
  return (
      <TermsWrap  >
     <HeaderComponent
        goBack={() => props.navigation.goBack()}
        text="Terms & Conditions"
      />
      <TermsContentWrap   >
    <ScrollView>

    <TextPara>
          Lorem ipsum dolor sit amet, consectetur in elit. In mauris
          cursus id convallis maecenas sollicitudint pellentesque nunc. Vel
          pellentesque enim quamte non suspendisse. Accumsan, sem eros hac uterw
          lacus sit imperdiet eu tempus. Turpis facilisi asde aliquet sit ipsum
          felis, at accumsan. Aliquam indn maas consequat sed tortor, blandit sit
          purus. Nisl volutpat risus, pretium integer. Venenatis, telluste wblandit
          viverra in elementum eleifend imperdiet.
        </TextPara>

    <TextPara>
          Lorem ipsum dolor sit amet, consectetur in elit. In mauris
          cursus id convallis maecenas sollicitudint pellentesque nunc. Vel
          pellentesque enim quamte non suspendisse. Accumsan, sem eros hac uterw
          lacus sit imperdiet eu tempus. Turpis facilisi asde aliquet sit ipsum
          felis, at accumsan. Aliquam indn maas consequat sed tortor, blandit sit
          purus. Nisl volutpat risus, pretium integer. Venenatis, telluste wblandit
          viverra in elementum eleifend imperdiet.
        </TextPara>

    <TextPara>
          Lorem ipsum dolor sit amet, consectetur in elit. In mauris
          cursus id convallis maecenas sollicitudint pellentesque nunc. Vel
          pellentesque enim quamte non suspendisse. Accumsan, sem eros hac uterw
          lacus sit imperdiet eu tempus. Turpis facilisi asde aliquet sit ipsum
          felis, at accumsan. Aliquam indn maas consequat sed tortor, blandit sit
          purus. Nisl volutpat risus, pretium integer. Venenatis, telluste wblandit
          viverra in elementum eleifend imperdiet.
        </TextPara>

    <TextPara>
          Lorem ipsum dolor sit amet, consectetur in elit. In mauris
          cursus id convallis maecenas sollicitudint pellentesque nunc. Vel
          pellentesque enim quamte non suspendisse. Accumsan, sem eros hac uterw
          lacus sit imperdiet eu tempus. Turpis facilisi asde aliquet sit ipsum
          felis, at accumsan. Aliquam indn maas consequat sed tortor, blandit sit
          purus. Nisl volutpat risus, pretium integer. Venenatis, telluste wblandit
          viverra in elementum eleifend imperdiet.
        </TextPara>

    
    </ScrollView>
      </TermsContentWrap>
      </TermsWrap>
  );
};

export default Terms;
