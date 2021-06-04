import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../config/colors'

const MyInput = ({text,onChange,pass=false}) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
               <Text style={styles.text}>{text.toUpperCase()}</Text>
            </View>
            <TextInput
            onChangeText={(a)=>onChange(a)}
            style={styles.input}
            secureTextEntry={pass}
            ></TextInput>
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container:{
        margin:30
        
    },
    head:{
        flexDirection:'row'
    },
    text:{
        fontSize:20,
        fontWeight:"600",
        color:colors.grey,
    },
    input:{
        fontSize:20,
        borderBottomWidth:1,
        borderBottomColor:colors.grey,
        paddingVertical:7,
        color:colors.white
    }
})
