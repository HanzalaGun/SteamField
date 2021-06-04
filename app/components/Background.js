import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
const image=require('../assets/images/wave.png')
const Background = ({children}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={image}
            style={styles.wave1}
            >
            </ImageBackground>
            <ImageBackground
            source={image}
            style={styles.wave2}
            >
            </ImageBackground>
            <ImageBackground
            source={image}
            style={styles.wave3}
            >
            </ImageBackground>
                {children}
        </View>
    )
}

export default Background

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    wave1:{
        width:Dimensions.get('window').width,
        height:160,
        resizeMode: "cover",
        position:'absolute',
        bottom:-40,
        opacity:0.1,

    },
    wave2:{
        width:Dimensions.get('window').width*2,
        height:360,
        opacity:0.1,
        resizeMode: "cover",
        position:'absolute',
        bottom:-40,
        

    },
    wave3:{
        width:Dimensions.get('window').width,
        height:70,
        resizeMode: "cover",
        position:'absolute',
        bottom:-40,
        opacity:0.1,

    }
})
