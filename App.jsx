import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import { styles } from './assets/styles';
import BatterieScreen from './screen/BatterieScreen';
import HomeScreen from './screen/HomeScreen';
import GameScreen from './screen/GameScreen';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Batterie" component={BatterieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
