import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  header:{
   width: '100%',
   flexDirection: 'row',
   alignItems: 'center',
   paddingHorizontal: 32,
   marginTop: 28,
   justifyContent: 'space-between',
  },
  logoImg:{
    width: 72,
    height: 40,
  },
  right:{
    width: 20,
    height: 20,
    
  },
  cover:{
    width: 255,
    height: 350,
    borderRadius: 8,
    marginTop: 32,
    
  },
  contentList:{
    paddingEnd: 60,
  },
  empty:{
    color: THEME.COLORS.TEXT,
    marginStart: 45,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 18,
  }
});