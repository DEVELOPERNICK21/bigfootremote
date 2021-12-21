import React, { useState } from 'react';
import { View, Text, Modal, SectionList, ScrollView } from 'react-native';
import FormInput from '../FormInput';
import { InterioInputView, InteriorTouchable, InteriorText, ModalScrollView, ModalToucable, ModalView, OptionText, OptionTouchable } from '../../../Screens/CheckIn/CheckInStyle';
import ModalPicker from '../ModalInput';


  

const Interior = () => {
  const [chooseData, setchooseData] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const OPTIONS = ['Working', 'Not Working', 'Pending', 'To Collects']
  const Data = [
    {
      title: 'Title 1',
      data: ['Working', 'Not Working', 'Pending', 'To Collects']
    },
    {
      title: 'Title 2',
      data: ['Working', 'Not Working', 'Pending', 'To Collects']
    },
    {
      title: 'Title 3',
      data: ['Working', 'Not Working', 'Pending', 'To Collects']
    },
    {
      title: 'Title 4',
      data: ['Working', 'Not Working', 'Pending', 'To Collects']
    },
  ]    

  const onPressOption = (option) => {
    changeModalVisibilty(false)
    setData(option);

  }

  const changeModalVisibilty = (bool) => {
    setIsModalVisible(bool)
  }

  const setData = (option) => {
    setchooseData(option)
  }


  return (
    <ScrollView >

      <InterioInputView>
          <Text>Solar Film</Text>
        <InteriorTouchable
          onPress={() => { changeModalVisibilty(true) }}
        >
          <InteriorText>{chooseData}</InteriorText>
          <Modal
            transparent={true}
            animationType='fade'
            visible={isModalVisible}
            nRequestClose={() => { changeModalVisibilty(false) }}
          >
            <ModalPicker
              sendOption={OPTIONS}
              changeModalVisibilty={changeModalVisibilty}
              setData={setData}
            />
          </Modal>
        </InteriorTouchable>

      </InterioInputView>
      
     
    </ScrollView>
  );
};

export default Interior;
