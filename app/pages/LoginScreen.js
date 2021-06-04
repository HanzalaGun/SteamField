import React,{useState} from 'react'
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from '../components/AppButton'
import Background from '../components/Background'
import Logo from '../components/Logo'
import MyInput from '../components/MyInput'
import Screen from '../components/Screen'
import colors from '../config/colors'

const LoginScreen = ({signed}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const signIn=()=>{
        if(email.length>10&& password.length>10){
            signed(email)
        }else{
            Alert.alert('Error','Your email and password must be more 10 characters')
        }
    }
    return (
        <Screen>
            <Background>
                <Logo/>
                <Text style={styles.header1}>
                    Welcome,
                </Text>
                <Text style={styles.header2}>
                    sign in to continue
                </Text>
                <View style={{height:40}}/>
                <MyInput text="Email"
                    onChange={(val)=>{setemail(val)}}
                />
                <MyInput text="Password"
                    pass
                    onChange={(val)=>{setpassword(val)}}
                />
                <TouchableOpacity
                     style={styles.forgotbutton}
                    onPress={()=>{
                        Alert.alert('Forgot Password','It\'ll navigate to forgotScreen')
                    }}>
                    <Text style={styles.forgottext}>Forgot Password?</Text>
                </TouchableOpacity>
                <AppButton text="SIGN IN" onPress={()=>signIn()} />
                <TouchableOpacity
                     style={styles.signbutton}
                    onPress={()=>{
                        Alert.alert('Sign Up','It\'ll navigate to SignUpScreen')
                    }}>
                    <Text style={styles.signtext1}>New Member?</Text>
                    <Text style={styles.signtext2}>Sign Up Now</Text>
                </TouchableOpacity>
            </Background>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  header1:{
      color:colors.white,
      fontSize:40,
      marginLeft:30,
      marginTop:20,
      fontWeight:'600'
  },
  header2:{
      color:colors.grey,
      fontSize:30,
      marginLeft:30,
      fontWeight:'600'
  },
  forgotbutton:{
      paddingRight:30,
      alignSelf:'flex-end'
  },
  forgottext:{
      color:colors.white,
      fontSize:16
  },
  signbutton:{
      flexDirection:'row',
      paddingLeft:30,
      paddingTop:20
      
  },
  signtext1:{
      color:colors.white,
      fontSize:16,
      fontWeight:'600'
    },
    signtext2:{
        color:colors.pripamry,
        fontSize:16,
        paddingLeft:10,
        fontWeight:'600'
  },

})
