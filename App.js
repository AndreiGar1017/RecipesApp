import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';

//Components
import Recipes from './components/getRecipes';

export default App = () => {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00000" barStyle='dark-content' />
      <Text style={styles.title}>Welcome to RecipesApp!</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter your ingredient'
        placeholderTextColor='#ffffff'
        value={ingredient1}
        onChangeText={(text) => setIngredient1(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Enter your second ingredient'
        placeholderTextColor='#ffffff'
        value={ingredient2}
        onChangeText={(text) => setIngredient2(text)}
      />
      <Recipes ingredient1={ingredient1} ingredient2={ingredient2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00ff00', 
    textShadowColor: '#00ff00', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    padding: 10,
    margin: 20,
    borderWidth: 2,
    borderColor: '#00ff00', 
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'black', 
    shadowColor: '#00ff00', 
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5, 
  },
});
