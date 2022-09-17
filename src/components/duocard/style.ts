import { THEME } from './../../theme/index';
import {StyleSheet} from 'react-native'

export  const styles = StyleSheet.create({
  container: {
    width:250,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginLeft: 20,
    marginVertical: 20,
    alignItems: 'center'
  },
  button:{
   width: "100%",
   height:46,
   borderRadius: 6,
   backgroundColor: THEME.COLORS.PRIMARY,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
  },
  textBtn:{
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 10,
  }

});
