import React from 'react'
import { View, Text } from 'react-native'
import ThreeImage from '../ThreeImage'
import { TextMedia } from '../../../Screens/CheckIn/CheckInStyle'

const Media = () => {
    return (
        <View>
            <TextMedia>Upload Photos & Videos</TextMedia>
            <ThreeImage />
        </View>
    )
}

export default Media
