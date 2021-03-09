import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Minha Rotina</Text>
      <Text style = {styles.subtitulo}>Manhã</Text>
      <Text style = {styles.texto}>6:30 - 7:00 - Café da Manhã</Text>
      <Text style = {styles.texto}>7:00 - 12:20 - Aulas Presenciais/EAD</Text>
      <Text style = {styles.subtitulo}>Tarde</Text>
      <Text style = {styles.texto}>12:30 - 13:00 - Almoço</Text>
      <Text style = {styles.texto}>13:30 - 15:30 - Realização de Atividades Escolares</Text>
      <Text style = {styles.texto}>15:30 - 17:30 - Descanso</Text>
      <Text style = {styles.subtitulo}>Noite</Text>
      <Text style = {styles.texto}>17:30 - 20:30 - Gameplay</Text>
      <Text style = {styles.texto}>20:30 - 21:00 - Jantar</Text>
      <Text style = {styles.texto}>22:30 - Horário de Dormir</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  subtitulo: {
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '20px',
    marginTop: '20px',
  },
  texto: {
    fontFamily: 'Century Gothic',
    fontSize: '16px',
    marginBottom: '10px',
  },
});
