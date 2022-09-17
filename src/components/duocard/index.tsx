import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles }from './style'
import Info from "../duoinfo/index"
import { THEME } from './../../theme/index';
import { Entypo} from '@expo/vector-icons'

export interface DuoCardsProps{
  id: string;
  hourStart: string;
  hoursEnd: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}
interface Props{
  data: DuoCardsProps;
  onConnect: ()=> void;
}

export default function DuoCard({data, onConnect}: props) {
  return (
    <View style={styles.container}>
      
      <Info label="name" value={data.name} />
      <Info label="tempo de jogo" value={`${data.yearsPlaying} anos`} />
      <Info
       label="Disponibilidade" 
       value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hoursEnd}`}
      />
      <Info 
      label="chamada de  áudio" 
      colorValue={data.useVoiceChannel?  THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      value={data.useVoiceChannel?  "sim" : "não"} 
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
       <Entypo name="game-controller" size={24} color="white" />
        <Text style={styles.textBtn}>Conectar</Text>
      </TouchableOpacity>
       </View>
  )
}