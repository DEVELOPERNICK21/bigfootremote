import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { StepWiseWrapper,StepProgressWrap, StepNameAndCircle, StepLine, StepCircleTouch, UpperCircle, StepCircleTouchActive, StepText, StepTick, StepTextActive } from '../../../Screens/CheckIn/CheckInStyle'
import ImagePath from '../../Constants/ImagePath'
import Exterior from '../CheckIn/Exterior'
import Interior from '../CheckIn/Interior'
import Media from '../CheckIn/Media'
import OtherItems from '../CheckIn/OtherItems'
import FormButton from '../FormButton'

const StepWiseForm = () => {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(1);

    const goNext = () => {
        if (page === 4) return;
        setPage(page => page + 1);
        if (page === 1) {
            setActive(active + 1);
        } else if (page === 2) {
            setActive(active + 1);
        } else if (page === 3) {
            setActive(active + 1);
        } else if (page === 4) {
            setActive(active + 4);
        }
    };

    const goPrevious = () => {
        if (page === 1) return;
        setPage(page => page - 1);
    };

    const goToStepOne = () => {
        if (page === 2) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepTwo = () => {
        if (page === 3) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepThree = () => {
        if (page === 4) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    const goToStepFour = () => {
        if (page === 3) {
            setPage(page => page - 1);
            setActive(active - 1);
        } else {
            return;
        }
    };

    return (
        <StepWiseWrapper>
            <StepProgressWrap>
            <StepLine></StepLine>

                {active === 1 ? (
                    <StepNameAndCircle>
                        <StepCircleTouchActive onPress={goToStepOne}>
                            <UpperCircle>
                                <StepTick source={ImagePath.White_Tick} />
                            </UpperCircle>
                        </StepCircleTouchActive>
                        <StepTextActive>Interior</StepTextActive>
                         
                    </StepNameAndCircle>
                ) : (
                    
                    <StepNameAndCircle>
                    <StepCircleTouch onPress={goToStepOne}>
                        <StepTick source={ImagePath.White_Tick} />
                    </StepCircleTouch>
                        <StepText>Interior</StepText>
                    </StepNameAndCircle>
                )}
                {active === 2 ? (
                    <StepNameAndCircle>
                    <StepCircleTouchActive onPress={goToStepTwo}>
                        <UpperCircle>
                            <StepTick source={ImagePath.White_Tick} />
                        </UpperCircle>
                    </StepCircleTouchActive>
                            <StepTextActive>Exterior</StepTextActive>
                    </StepNameAndCircle>
                ) : (
                    <StepNameAndCircle>
                    <StepCircleTouch onPress={goToStepTwo}>
                        <StepTick source={ImagePath.White_Tick} />
                    </StepCircleTouch>
                         
                        <StepText>Exterior</StepText>
                    </StepNameAndCircle>
                )}
                {active === 3 ? (
                    <StepNameAndCircle>
                    <StepCircleTouchActive onPress={goToStepThree}>
                        <UpperCircle>
                            <StepTick source={ImagePath.White_Tick} />
                        </UpperCircle>
                    </StepCircleTouchActive>
                         
                        <StepTextActive>Media</StepTextActive>
                    </StepNameAndCircle>
                ) : (
                    <StepNameAndCircle>
                    <StepCircleTouch onPress={goToStepThree}>
                        <StepTick source={ImagePath.White_Tick} />
                    </StepCircleTouch>
                         
                        <StepText>Media</StepText>
                    </StepNameAndCircle>
                )}
                {active === 4 ? (
                    <StepNameAndCircle>
                    <StepCircleTouchActive>
                        <UpperCircle>
                            <StepTick source={ImagePath.White_Tick} />
                        </UpperCircle>
                    </StepCircleTouchActive>
                        <StepTextActive>Other Items</StepTextActive>
                    </StepNameAndCircle>
                ) : (
                    <StepNameAndCircle>
                    <StepCircleTouch>
                        <StepTick source={ImagePath.White_Tick} />
                    </StepCircleTouch>
                        <StepText>Other Items</StepText>
                    </StepNameAndCircle>
                )}
            </StepProgressWrap>
            <View>
                {page === 1 && <Interior />}
                {page === 2 && <Exterior />}
                {page === 3 && <Media />}
                {page === 4 && <OtherItems />}
            </View>

            <View>
                {page !== 4 ? (
                    <FormButton buttonTitle="NEXT" onPress={goNext} />
                ) : (
                    <FormButton buttonTitle="Submit" onPress={goNext} />
                )}
            </View>

        </StepWiseWrapper>
    )
}

export default StepWiseForm
