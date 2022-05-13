import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Team from '../component/Team';
import { TeamList } from '../component/TeamList';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
import { AddTeam } from '../component/AjoutTeam';

export default function GameMenuScreen({ navigation }) {
  const { teams } = useContext(GlobalContext);
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
      </View>
  );
}