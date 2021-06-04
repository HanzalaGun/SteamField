import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const BottomView = ({children}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {children}
            </ScrollView>
        </View>
    )
}

export default BottomView

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        alignSelf:'center',
        width:'95%',
        top:Dimensions.get('screen').height*0.2,
        height:Dimensions.get('screen').height*0.8,
        backgroundColor:colors.wave,
        padding:10,
        borderRadius:20
    }
})
