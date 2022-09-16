import React, {useState, useEffect} from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'

const CardView2 = ({ title, rating, score, year, image_url, navigation, pickedData, index }) => {
    
  return (
    
    <TouchableOpacity
    key={index}
    style={styles.cardView}
    onPress={() => navigation.navigate('Details', {pickedData})}
    >
        <Image
        source={{uri: image_url}}
        style={styles.image}
        resizeMode={'cover'}
        />
        <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flex: 1}}>
            <Text style={[styles.name, {fontWeight: 'bold', fontSize: 16}]}>{title}</Text>
            <Text style={styles.name}>{rating}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <AntIcon name="star" color={'#fcd303'} size={20}/>
                <Text style={{marginLeft: 10, paddingTop: 2}}>{score ? score : 0}</Text>
            </View>
            <Text style={styles.name}>Year : {year ? year : 'N/A'}</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        margin: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        elevation: 4,
        shadowRadius: 5,
        shadowOffset: {width: 1, height: 4},
        padding: 20,
        paddingHorizontal: 10,
        width: '45%',
    },
    image: {
        width: '100%',
        height: 130,
    },
    name : {
        marginTop: 10,
        textAlign: 'center'
    }
})

export default CardView2