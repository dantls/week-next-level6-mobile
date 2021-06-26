import React from 'react';
import { View, Text} from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';
import {ButtonAdd} from './../ButtonAdd';


export function Profile(){
  return(
    <>
      <View style={styles.container}>
        <View style={styles.profile}>
          
          <Avatar 
            urlImage={"https://avatars.githubusercontent.com/u/51554360?v=4"}
          />
        
          <View> 
            <View style={styles.user}>
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
        

        <ButtonAdd />
      </View>
    </>
  )
}