import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Background from "../../components/background/index"
import  ModalDuo from "../../components/Modal/index"
import  DuoCard, { DuoCardsProps } from "../../components/duocard/index"
import { useRoute, useNavigation } from '@react-navigation/native';
import { THEME } from './../../theme/index';
import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from "../../components/heading";
import { useEffect, useState } from "react";

interface RouteParams{
  id: string,
  title: string,
  bannerUrl: string
}

export default function Game() {
  const [ads, setAds] = useState<DuoCardsProps>([])
  const [selectDiscord, setSelectDiscord] = useState('')
  const route = useRoute()
  const game = route.params as RouteParams
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.100.107:3333/ads/${adsId}/discord`)
    .then(response=>response.json())
    .then(data=> setSelectDiscord(data.discord))
  }

  useEffect(()=>{
    fetch(`http://192.168.100.107:3333/games/${game.id}/ads`)
    .then(response=>response.json())
    .then(data=> setAds(data))
  }, [])


  return (
    <Background>
      <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
         <Entypo
           name="chevron-thin-left"
           color={THEME.COLORS.CAPTION_300}
           size={20}
         /> 
         </TouchableOpacity> 
         <Image
         source={logoImg}
         style={styles.logoImg}
         />
         <View style={styles.right} /> 
      </View> 
      <Image 
      source={{uri: game.bannerUrl}}
      style={styles.cover}
      resizeMode="cover"
      />
      <Heading
        title={game.title}
        subtitle="conecte-se e comece a jogar!"
        style={{justifyContent: 'center', marginTop: 18,}}
      />
      <FlatList
      data={ads}
      key={(item)=>item.id}
      renderItem={({item})=>(
        <DuoCard 
        data={item}
        onConnect={()=>getDiscordUser(item.id)}  
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      ListEmptyComponent={()=>(
        <Text style={styles.empty}>não há anúncias publicados ainda </Text>
      )}
      />
      <ModalDuo
      visible={selectDiscord.length > 0}
      discord={selectDiscord}
      onClose={()=>setSelectDiscord("")}
      />
    </SafeAreaView>
      </ScrollView>
    </Background>
  )
}