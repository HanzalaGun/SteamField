/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import DashboardScreen from './app/pages/DashboardScreen';
import LoginScreen from './app/pages/LoginScreen';

const App: () => React$Node = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  
  return (
    <>
      {isLogin?<DashboardScreen email={email} logout={()=>setIsLogin(false)}/>:<LoginScreen signed={(email)=>{
        setIsLogin(true)
        setEmail(email)
        }}/>}
    </>
  );
};


export default App;
