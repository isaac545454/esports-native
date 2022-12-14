import { View, Text, TouchableOpacity,TouchableOpacityProps, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {LinearGradient} from 'expo-linear-gradient'
import { THEME } from './../../theme/index';


export interface GameCardProps{
  id: string;
  title: string;
  _count: {ads: number};
  bannerUrl: string;
}
interface Props extends TouchableOpacityProps{
  data: GameCardProps;
}

export function Card({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{uri: data.bannerUrl}}
      >
      <LinearGradient
      colors={THEME.COLORS.FOOTER}
      style={styles.footer}
      >
       <Text style={styles.name}>
        {data.title}
       </Text>
       <Text style={styles.ads}>
        {data._count.ads} anúncios
       </Text>
      </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}