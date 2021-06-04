import React from 'react'
import {  Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const Screen = ({children}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"  />
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        width:'100%',
        height:'100%',
        
    }
})
