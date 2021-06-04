import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'

const Logo = () => {
    return (
        <View style={styles.logoview}>
            <Text style={styles.logotext1}>Steem</Text>
            <Text style={styles.logotext2}>field</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logoview:{
        flexDirection:'row',
        marginLeft:30,
        marginTop:Dimensions.get('screen').height*0.1
    },
    logotext1:{
        color:colors.pripamry,
        fontSize:30,
        
    },
    logotext2:{
        color:colors.secondary,
        fontSize:30,
        
    }
})
