import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import { styles } from './assets/styles';
import BatterieScreen from './screen/BatterieScreen';
import HomeScreen from './screen/HomeScreen';
import TeamScreen from './screen/TeamScreen';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalProvider } from './context/GlobalState';
import GameMenuScreen from './screen/GameMenuScreen';

export default function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <GlobalProvider>
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="GameMenu" component={GameMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalProvider>
  );
}
