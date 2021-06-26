import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import { styles } from './styles';

export function Home(){
  return(
    <>
      <View style={styles.container}>
          
            <View style={styles.profile}>
              <Image 
                source={{
                  uri:"https://avatars.githubusercontent.com/u/51554360?v=4"
                }}
                style={styles.avatar}
              />
              <View >
                <Text style={styles.greeting}>
                  Olá,
                </Text>
                <Text style={styles.username}>
                  Danilo
                </Text>
              </View>
              <Text style={styles.text}>
                Hoje é dia de vitória
              </Text>
            </View>
            

      
      </View>
    </>
  )
}