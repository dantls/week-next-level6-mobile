import { StyleSheet }from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    height: RFValue(49),
    width: RFValue(49),
    borderRadius: RFValue(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFValue(22)
  },
  avatar:{
    height:RFValue(46),
    width:RFValue(46),
    borderRadius: RFValue(8)
  },
  
}) 