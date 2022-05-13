import React, { useContext } from 'react';
import { Button, View, ScrollView, Text } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { useEffect } from 'react/cjs/react.production.min';
import { GlobalContext } from '../context/GlobalState';
import { styles } from '../assets/styles';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';


export const TeamList = () => {
  const { teams, removeTeam } = useContext(GlobalContext);
  return (
    <React.Fragment>
      {teams.length > 0 ? (
        <React.Fragment>
          <ScrollView>
          {teams.map((team) => (
            <View key={team.id}>
            <Card style={{padding:20, margin: 5}}>
                <Text style={{paddingRight: 40}}>
                    {team.name}
                </Text>
                {showScore == "true" &&
                    <Text 
                    style={styles.removeBtn}
                    onPress={() => removeTeam(team.id)}
                    >
                      &times;
                    </Text>
                }
            </Card>
            </View>
          ))}
          </ScrollView>
        </React.Fragment>
      ) : (
          <Text>Encore aucune équipe !</Text>
      )}
    </React.Fragment>
  );
};