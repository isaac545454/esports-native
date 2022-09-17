import { Text, Image, FlatList } from 'react-native'
import {useState, useEffect } from 'react'
import {styles} from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import Heading from "../../components/heading/index";
import {Card, GameCardProps } from "../../components/card/index";
import { SafeAreaView } from 'react-native-safe-area-context'
import  Background from "../../components/background/index"
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  useEffect(()=>{
    fetch("http://192.168.100.107:3333/games")
    .then(response=>response.json())
    .then(data=> setGames(data))
  }, [])

  function handleOpenGames({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', {id, title, bannerUrl})
  }
  
  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image
      source={logoImg}
      style={styles.logo}
      />
      <Heading
      title="encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList 
      data={games}
      keyExtractor={item=> item.id}
      renderItem={({item})=>(
        <Card data={item}
        onPress={()=>handleOpenGames(item)} />
        
       )}
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
    </Background>

  )
}