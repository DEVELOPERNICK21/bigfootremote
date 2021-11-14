import React from 'react'
import { View, StyleSheet } from 'react-native'

const BottomLine = () => {
    return (
    
            <View style={styles.bottomLine}>
            </View>

    )
}

export default BottomLine



const styles = StyleSheet.create({
    bottomLine:{
        backgroundColor: '#ECEDF2',
        position: 'absolute',
        padding: 3,
        width: 125,
        margin: 5,
        borderRadius: 10,
        bottom: 0,
    }
}
)