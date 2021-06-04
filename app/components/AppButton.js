import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../config/colors'
import { RightIcon } from '../config/icons'

const AppButton = ({text,onPress}) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={()=>onPress()}>
            <Text style={styles.text}>{text}</Text>
            <RightIcon width={20} height={20} color={colors.white} />
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container:{
        width:150,
        height:50,
        backgroundColor:colors.secondary,
        marginLeft:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    text:{
        color:colors.white,
        fontSize:20,
        fontWeight:'700',
    }
})
