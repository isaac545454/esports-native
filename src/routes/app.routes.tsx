import { createNativeStackNavigator } from '@react-navigation/native-stack';
//components 
import Home from '../screens/home/index'
import Game from '../screens/game/index'

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
      name="home"
      component={Home}
      />
      <Screen 
      name="game"
      component={Game}
      />
    </Navigator>
  )
}