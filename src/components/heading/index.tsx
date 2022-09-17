import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import {styles} from './styles'

interface Props extends ViewProps{
  title: string, 
  subtitle: string
}

export default function index({title, subtitle, ...rest}: props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  )
}