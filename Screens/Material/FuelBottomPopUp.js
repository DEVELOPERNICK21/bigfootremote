import React,{useState} from 'react'
import { RadioButton,Text } from 'react-native-paper';
import { RadioStyleColumn,RadioGroupStyle,RadioText,SelectRadio ,PopUpHeading,PopUpBottomLine,RowItem } from '../Dashboard/DashboardStyle'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const FuelBottomPopUp = (props) => {
    const [checked, setChecked] = useState('first');  

    return (
        <SelectRadio>
        <RowItem>
        <PopUpHeading>All Materials</PopUpHeading>
        <MaterialIcon name="close" size={25} color="#777" onPress={props.closeIt}  /> 
        </RowItem>
        <PopUpBottomLine></PopUpBottomLine>

        <RadioStyleColumn>
              <RadioGroupStyle>
                <RadioButton
                  color="#000"
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
              />
                <RadioText>Collected Selected</RadioText>
              </RadioGroupStyle>
        <RadioGroupStyle>
        <RadioButton
          color="#000"
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
        />
           <RadioText>Returned Selected</RadioText>
        </RadioGroupStyle>
      </RadioStyleColumn>   
      </SelectRadio>
 
    )
}

export default FuelBottomPopUp
