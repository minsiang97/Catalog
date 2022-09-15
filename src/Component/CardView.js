import React, {useState, useEffect} from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'

const CardView = ({ name, rating, score, year, image_url }) => {
    
  return (
    
    <TouchableOpacity 
        style={styles.cardView}
    >
        <View style={{flex: 0.3}}>
            <Image
            source={{uri: image_url}}
            style={styles.image}
            resizeMode={'contain'}
            />
        </View>
        <View style={{flex: 0.7, paddingHorizontal: 20}}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>{rating}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <AntIcon name="star" color={'#fcd303'} size={20}/>
                    <Text style={{marginLeft: 10, paddingTop: 2}}>{score ? score : 0}</Text>
                </View>
                <Text>Year : {year ? year : 'N/A'}</Text>
            </View>
            
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardView: {
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 5,
        shadowOffset: {width: 1, height: 4},
        padding: 20,
        paddingHorizontal: 10
    },
    image: {
        width: 100,
        height: 130,
    },
    title: {
        marginTop: 10,
        fontSize: 16
    },
    text: {
        marginTop: 10,
    }
})

export default CardView