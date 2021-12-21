import React from 'react'
import HeaderComponent from '../../src/components/Header/HeaderComponent'
import ThreeImage from '../../src/components/ThreeImage'
import { InstallerWrap, CustomerText } from '../InstalerImages/InstallerStyle'


const Customer = (props) => {
    return (
        <>
            <InstallerWrap>
                <HeaderComponent
                    goBack={() => props.navigation.goBack()}
                    text="Customer Images"
                />
                <ThreeImage />
                <ThreeImage />
                <CustomerText>Customer Remarks</CustomerText>
            </InstallerWrap>
        </>
    )
}

export default Customer