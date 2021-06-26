import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: RFValue(56),
    backgroundColor: theme.colors.primary,
    borderRadius: RFValue(8),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(30)
  },
  iconWrapper:{
    width: RFValue(56),
    height: RFValue(56),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon:{
    width: RFValue(24),
    height: RFValue(18)
  },
  title:{
    flex: 1,
    fontSize: RFValue(16),
    color: theme.colors.heading,
    textAlign: 'center'
  }
})