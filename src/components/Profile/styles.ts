import { StyleSheet }from 'react-native';
import { theme } from '../../global/styles/theme';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + RFValue(26),
    marginBottom: RFValue(42)
  },
  user:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: RFValue(24),
    marginRight: RFValue(6)
  },
  username:{
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: RFValue(24)
  },
  text:{
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: RFValue(15),
    lineHeight: RFValue(17)
  },

  profile:{
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  
}) 