import React from 'react'
import { ModalScrollView, ModalToucable, ModalView, OptionText, OptionTouchable } from '../../Screens/CheckIn/CheckInStyle';

// const OPTIONS = ['Working', 'Not Working', 'Pending', 'To Collect']

const ModalPicker = (props) => {
    
    const OPTIONS = [...props.sendOption, console.log(...props.sendOption)]
    const onPressOption = (option) => {
        props.changeModalVisibilty(false)
        props.setData(option);
        console.log("Map Option  Touchable")

    }

    const option = OPTIONS.map((item, index) => {
        return (
            <OptionTouchable
                key={index}
                onPress={() => onPressOption(item)}
            >
                <OptionText>
                    {item}
                </OptionText>
            </OptionTouchable>
        )
    })
    return (
        <ModalToucable  
            onPress={() => {
                props.changeModalVisibilty(false)
                console.log("Modal Tochable")
            }
            }
        >
            <ModalView>
                <ModalScrollView>
                    {option}

                </ModalScrollView>

            </ModalView>
        </ModalToucable>

    )

}



export default ModalPicker;
