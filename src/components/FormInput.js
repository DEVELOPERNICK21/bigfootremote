import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../Utils/Dimension';
import AntDesign from 'react-native-vector-icons/Feather';

          // onChangeText={changedText}
const FormInput = ({InputSubject,labelValue, placeholderText, iconType,changedText, isPassword, ...rest}) => {
  return (
    <>
      <Text style={styles.Subjectstyle} >{InputSubject} </Text>
      <View style={styles.inputContainer}>
      {
        iconType ? 
        <View style={styles.iconStyle}>
          <AntDesign name={iconType} size={20} color="#666" />
        </View>

        :
        null
      }
        <TextInput
          value={labelValue}
          onChangeText={changedText}
          style={styles.input}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor="#666"
          {...rest}
        />
      </View>
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 20,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Subjectstyle:{
    color: '#000',
    fontSize: 14,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    width: 50,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'DM Sans',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
