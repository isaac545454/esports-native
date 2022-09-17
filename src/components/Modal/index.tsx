import { View, Text, Modal, ModalProps,TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import {styles} from './style'
import { MaterialIcons } from '@expo/vector-icons'
import { THEME } from './../../theme/index';
import { AntDesign } from '@expo/vector-icons'; 
import Heading from '../heading/index';
import * as Clipboard from 'expo-clipboard'

interface Props extends ModalProps{
  discord: string;
  onClose: ()=>void;
}

export default function index({discord, onClose, ...res}: Props) {
  const [loading, setLoading] = useState(false)

 async function handleCopyDiscord(params:type) {
  setLoading(true)
  await Clipboard.setStringAsync(discord)
  Alert.alert("discord Copiado", "agora é so colar na busca do discord")
  setLoading(false)
 }

  return (
    <Modal {...res} transparent statusBarTranslucent animationType="slide" >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
          <MaterialIcons name="close"  size={25} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>
          <AntDesign 
           name="checkcircleo"  
           size={60} 
           color={THEME.COLORS.SUCCESS} 
           />

           <Heading
           title="let's play!"
           subtitle="agora e só começar a jogar!"
           style={{alignItems: 'center', marginTop: 24,}}
           />
           <Text style={styles.label}>
             adicione no discord
           </Text>

         <TouchableOpacity 
         style={styles.discordButton} 
         onPress={handleCopyDiscord}
         disabled={loading}
         >
            <Text style={styles.discord}>
              {!loading? discord : <ActivityIndicator color={THEME.COLORS.PRIMARY} />}
            </Text>
          </TouchableOpacity>  
        </View>
      </View>
    </Modal>
  )
}