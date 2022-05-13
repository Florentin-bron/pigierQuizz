import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions, Alert } from "react-native";
import { StyleSheet, Button, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { styles } from '../assets/styles';
import CountDown from 'react-native-countdown-component';

export default function Team() {
  const { width, height } = Dimensions.get("window");
  const [listTeam, setListTeam] = useState([]);
  const [nom, setNom] = useState("");
  const [score, setScore] = useState([]);

  
  useEffect(() => {
    // console.log('new score : ', score);
  }, [listTeam]);

  const ajoutTeam = (e) =>{
    e.preventDefault();
    if(nom !== ""){
        let maxId = 0
        if(listTeam.length !== 0) {
            maxId = parseInt(listTeam.reduce(
                (max, team) => (team.id > max ? team.id : max),
                listTeam[0].id
            ));
        }

        const newTeam = {
            'id': (maxId+1).toString(),
            'nom': nom,
        }
        setListTeam(listTeam => [...listTeam, newTeam])
        setNom("");
    }
}
 
  return (
    <View style={styles.containerTeam}>
        <View style={{alignContent: "center", justifyContent: "center", margin: 20}}>
            <Button title="Ajouter une équipe"/>
        </View>
      <ScrollView>
        {listTeam.map(team =>
            <Card>
                <Text>

                </Text>
            </Card>
            )}
      </ScrollView>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}