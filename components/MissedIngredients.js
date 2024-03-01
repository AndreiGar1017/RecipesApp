import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

const MissedIngredients = (missedIngredients) =>{
    return[
        missedIngredients.missedIngredients.missedIngredients.map((item) => (
            <View style={styles.dataContainer}>
                <Text style={styles.dataText}>  - {item.amount} {item.unit} {item.name}</Text>
            </View>
        ))
    ]
}

const styles = StyleSheet.create({
    dataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    dataText:{
        fontSize: 20
    }
})

export default MissedIngredients;