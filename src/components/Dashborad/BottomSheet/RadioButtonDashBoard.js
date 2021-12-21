import React,{useState}from 'react'
import { RadioStyle,RadioGroupStyle,RadioText,SelectRadio ,FilterText} from '../../../../Screens/Dashboard/DashboardStyle';
import { RadioButton,Text } from 'react-native-paper';



const RadioButtonDashBoard = (props) => {
  const [checked, setChecked] = useState('first');  

    return (
      <SelectRadio>
      <FilterText>Filter by</FilterText>

        <RadioStyle>
              <RadioGroupStyle>
                <RadioButton
                  color="#000"
                  value="first"
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
              />
                <RadioText>Last Week</RadioText>
              </RadioGroupStyle>
        <RadioGroupStyle>
        <RadioButton
          color="#000"
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
        />
           <RadioText>Last Month</RadioText>
        </RadioGroupStyle>
        <RadioGroupStyle>
        <RadioButton
          color="#000"
          value="third"
          status={ checked === 'third' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('third')}
        />
           <RadioText>Last Year</RadioText>
        </RadioGroupStyle>
      </RadioStyle>   
      </SelectRadio>
 
      )
}

export default RadioButtonDashBoard
