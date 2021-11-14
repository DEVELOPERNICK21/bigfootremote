import React from 'react'
import ThreeImage from '../src/components/ThreeImage'
import { InstallerWrap, CustomerText} from '../styles/InstallerStyle'


const Customer = () => {
    return (
        <>
            <InstallerWrap>
                <ThreeImage />
                <ThreeImage />
                <CustomerText>Customer Remarks</CustomerText>
            </InstallerWrap>
            </>
    )
}

export default Customer