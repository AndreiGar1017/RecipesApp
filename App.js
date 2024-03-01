import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native'

//Components
import Recipes from './components/getRecipes';

export default App = () => {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');


  return[
    <View style = {styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle='dark-content'/>
      <Text style ={styles.title}>Welcome to RecipesApp!</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter your ingredient'
      value={ingredient1}
      onChangeText= {(text) => setIngredient1(text)}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter your second ingredient'
      value={ingredient2}
      onChangeText= {(text) => setIngredient2(text)}
      />
      <Recipes ingredient1={ingredient1} ingredient2={ingredient2}/>
    </View>
  ]
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    marginBottom:20,
    fontWeight: "bold",
    marginTop: 20
  },
  textInput:{
    borderWidth:1,
    borderColor:'gray',
    width:'80%',
    padding:10,
    margin:20,
    borderRadius: 5
  }
})