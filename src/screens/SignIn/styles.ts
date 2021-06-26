import { StyleSheet }from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  image:{
    width: '100%',
    height: RFValue(360)
  },

  content: {
    marginTop: RFValue(-40),
    paddingHorizontal: RFValue(50)
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: RFValue(40),
    marginBottom: RFValue(16),
    fontFamily: theme.fonts.title700,
    lineHeight:RFValue(40)
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize:RFValue(15),
    marginBottom:RFValue(44),
    fontFamily: theme.fonts.title500,
    lineHeight:RFValue(25)
  }
}) 