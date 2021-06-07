import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import BottomNav from './Routes/BottomNav';


const getFonts = () => Font.loadAsync({
  'yekan':require('./assets/fonts/yekan.ttf'),
  'damion':require('./assets/fonts/damion.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <BottomNav/>
    );
  } else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
    
  }
}