import React from 'react';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import {styles} from './styles';

export function ButtonAdd({ ...rest}: RectButtonProps){
  return(
    <RectButton 
      {...rest}
      style={styles.container}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={theme.colors.heading}
        size={RFValue(24)}
      />
    </RectButton>
  )
}