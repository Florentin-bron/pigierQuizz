import React, { useState, useContext, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { GlobalContext } from '../context/GlobalState';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {useForm, Controller} from 'react-hook-form';


export const AddTeam = () => {

  const { addTeam, teams } = useContext(GlobalContext);

  const [nom, setNom] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (nom != ""){
      const newTeam = {
        id: teams.length + 1,
        name: nom,
        score: 0,
      };
      addTeam(newTeam);
      setNom("")
    }
  };

  return (
    <SafeAreaView style={{width: "70%"}}>
      <TextInput
        style={{backgroundColor: "lightgrey", padding:10, margin:10}}
        onChangeText={text => setNom(text)}
        value={nom}
      />
        <Button title='Ajouter' onPress={onSubmit}/>
    </SafeAreaView>

  );
};