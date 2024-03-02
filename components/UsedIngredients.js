import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image,FlatList, ScrollView } from 'react-native'

const UsedIngredients = (usedIngredients) =>{
    return[
        usedIngredients.usedIngredients.usedIngredients.map((item) => (
            <View style={styles.dataContainer}>
                
                <Text style={styles.dataText}>  - {item.amount} {item.unit} {item.name}</Text>
                
            </View>
        ))
    ]
}

const styles = StyleSheet.create({
    dataContainer: {
        justifyContent: 'justify',
        alignItems: 'justify',
        paddingTop: 10
    },
    dataText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00ff00', 
        textShadowColor: '#00ff00', 
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        marginBottom: 20,
    }
})

export default UsedIngredients