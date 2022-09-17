import { View, ActivityIndicator } from 'react-native'
import {styles} from './styles'
import { THEME } from "../../theme";

export default function index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} size={50} />
    </View>
  )
}