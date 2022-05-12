import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenue sur le gestionnaire du Pigier Quizz</Text>
      <Button
        title="Démarrer une partie !"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}