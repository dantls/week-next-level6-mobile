import { StyleSheet }from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 56
  },
  content: {
    flexDirection: 'row',
  },
  avatar:{
    height:46,
    width:46,
    marginRight: 20,
    borderRadius: 8
  },
  greeting:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500
  },
  profile:{
    flexDirection: "row",
  },
  username:{
    marginLeft: 5,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700
  },
  text:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500
  }
}) 