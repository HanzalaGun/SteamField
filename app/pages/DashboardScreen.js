import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BottomView from '../components/BottomView'
import Screen from '../components/Screen'
import colors from '../config/colors'
import data from '../config/data.json'
const DashboardScreen = ({email,logout}) => {
    const Up=()=>{
        return(
            <View style={styles.up}></View>
        )
    }
    const Down=()=>{
        return(
            <View style={styles.down}></View>
        )
    }
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.email}>Acc: {email}</Text>
                <TouchableOpacity onPress={()=>logout()}>
                    <Text style={styles.logout}>LogOut</Text>
                </TouchableOpacity>
            </View>
                <Text style={styles.title}>Coins</Text>
            <BottomView>
                {data.coins.map((coin,index)=>{
                    return(
                        <View style={styles.coincontainer} key={index}>
                            <Image source={{uri:coin.icon}} style={styles.image} />
                            <View>
                                <View style={styles.titleblock}>
                                    <Text style={styles.name}>{coin.name} </Text>
                                    <Text style={styles.name}>({coin.symbol}) </Text>
                                </View>
                                <View style={styles.priceblock}>
                                    <Text style={styles.price}>{parseFloat(coin.priceBtc).toFixed(6)} Bitcoin</Text>
                                </View>
                            </View>
                            <View style={styles.right}>
                                <Text style={[styles.change,parseFloat(coin.priceChange1d)>0?{color:colors.pripamry}:{color:colors.red}]}>{coin.priceChange1d} / d</Text>
                                {parseFloat(coin.priceChange1d)>0? <Up/>:<Down/>}
                            </View>
                        </View>
                    )
                })}
            </BottomView>
        </Screen>
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    email:{
        color:colors.white+'50',
        fontSize:20
    },
    logout:{
        color:colors.red,
        fontSize:20,
        
    },
    title:{
        alignSelf:'center',
        paddingTop:20,
        fontSize:22,
        fontWeight:'900',
        color:colors.white,
    },
    coincontainer:{
      flexDirection:'row',
      padding:10,
      marginVertical:10,
      backgroundColor:colors.boxColor,
      borderRadius:5
    },
    titleblock:{
        paddingLeft:10
    },
    priceblock:{
        paddingLeft:10
    },
    price:{
        color:colors.pripamry,
        fontSize:17,
        fontWeight:'600'
    },
    name:{
        color:colors.white,
        fontSize:18,
        fontWeight:'800'
    },
    image:{
        width:50,
        height:50
    },
    right:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
        flexDirection:'row'
        
    },
    change:{
        fontSize:16,
        fontWeight:'700',
        paddingRight:6
    },
    up:{
        borderLeftColor:'transparent',
        borderBottomColor:colors.pripamry,
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderStyle: 'solid',
        borderLeftWidth:15,
        borderBottomWidth:15,
        borderTopWidth:15,
        borderRightWidth:15,
        width: 0,
        height: 0,
        marginBottom:15
    },
    down:{
        borderLeftColor:'transparent',
        borderBottomColor:'transparent',
        borderTopColor:colors.red,
        borderRightColor:'transparent',
        borderStyle: 'solid',
        borderLeftWidth:15,
        borderBottomWidth:15,
        borderTopWidth:15,
        borderRightWidth:15,
        width: 0,
        height: 0,
        marginTop:15
    }
})
