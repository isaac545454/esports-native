import { View, Text } from 'react-native'
import { styles } from "./styles";
import { THEME } from './../../theme/index';

interface Props{
  label: string;
  value: string;
  colorValue: ColorValue;
}
export default function index({label, value, colorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, {color: colorValue}]}
      numberOfLines={1}>{value}</Text>
    </View>
  )
}