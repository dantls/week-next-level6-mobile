import React from 'react';
import { RectButton,RectButtonProps } from 'react-native-gesture-handler';

import { Text,Image,View} from 'react-native';

import {styles} from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIcon({title, ...rest}: Props){
  return(
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image 
          style={styles.icon}
          source={DiscordImg}
        />
      </View>
        <Text style={styles.title}>
          {title}
        </Text>
      
    </RectButton>
  )
}