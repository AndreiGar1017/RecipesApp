import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


const Recipes = ({ ingredient1, ingredient2 }) => {
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = 'b231be1abbfa4dc5b4b9798ed1f6527f';

    const getRecipe = async () => {
        try {
            const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient1},+${ingredient2}&number=3`)
            const data = await res.json();
            if (res.status === 200) {
                setRecipe(data);
                setError(null);
            } else {
                setError(`Error finding your recipe!`)
            }
        } catch (err) {
            setError(`Error finding your recipe!`)
        }
    }

    return [
        <>
            <View>
                <TouchableOpacity style={styles.button} onPress={getRecipe}>
                    <Text style={styles.buttonText}>Get Recipe</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {error && <Text>{error}</Text>}
                {recipe && recipe.map((item, index) => (
                    <View key={index} style={styles.dataContainer}>
                        <Text style={styles.dataText}>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={styles.recipeImage} />
                    </View>
                ))}
            </ScrollView>
        </>

    ]
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9AD0C2',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "black"
    },
    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    recipeImage: {
        width: 240,
        height: 150,
        marginBottom: 5,
        borderRadius: 5,
        //aspectRatio: 1, // Para mantener la relación de aspecto de la imagen
        //resizeMode: 'contain', // Para ajustar la imagen al contenedor sin recortarla
    },
    dataText: {
        fontSize: 20
    }
})

export default Recipes;