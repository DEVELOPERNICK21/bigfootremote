import React from 'react'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import ThreeImage from '../src/components/ThreeImage'

import { InstallerWrap,InstallerText, InsallerHeading,InsallerSubHeading,AddImage,AddImgText} from '../styles/InstallerStyle'

const Installer = () => {
    return (
        <InstallerWrap>
                <InstallerText>
                    <InsallerHeading>Before marking</InsallerHeading>
                    <InsallerSubHeading>(Condtion of body work/wheels/tyres)</InsallerSubHeading>
                </InstallerText>
               <ThreeImage />
                <InstallerText>
                    <InsallerHeading>After marking</InsallerHeading>
                    <InsallerSubHeading>(Condtion of body work/wheels/tyres)</InsallerSubHeading>
                </InstallerText>
               <ThreeImage />
                <AddImage>
                    <AntDesign name="pluscircleo" size={30} color="#AE282E" />
                    <AddImgText>Add Images</AddImgText>
                </AddImage>
        </InstallerWrap>
    )
}

export default Installer
