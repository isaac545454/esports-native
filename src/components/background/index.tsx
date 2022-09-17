import { ImageBackground , Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import BackgroundImg from '../../assets/background-galaxy.png'

interface Props{
  children: React.ReactNode;
}

export default function index({children}: props) {
  return (
    <ImageBackground
    source={BackgroundImg}
    defaultSource={BackgroundImg}
    style={styles.container}
    >
        {children}
    </ImageBackground>
  )
}

