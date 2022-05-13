import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ width: 100, height: 100}} source={
        require('../assets/logo.png')
      }/>
      <Text style={{fontSize:30, marginBottom: 20, textAlign: "center"}}>Bienvenue sur le gestionnaire du Pigier Quizz</Text>
      <Button
        title="Démarrer une partie !"
        onPress={() => navigation.navigate('Team')}
      />
      <Button title='testtt' onClick={ () =>{ console.log('TEST');}} />
    </View>
  );
}