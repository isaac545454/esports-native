import { StatusBar, Text, View } from 'react-native';
import BackgroundImg from "./src/components/background/index";
import Loading from './src/components/loading/index'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Routes } from "./src/routes/index";

export default function App() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <BackgroundImg>
     <StatusBar
       barStyle="light-content"
       backgroundColor="transparent"
       translucent
     />
     {fontLoading? <Routes />: <Loading />}
    </BackgroundImg>
  );
}


