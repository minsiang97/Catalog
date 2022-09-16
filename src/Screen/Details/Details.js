import React, { useRef, useState, useEffect } from 'react'
import { Animated, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { useSelector, useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux/actions/Favourites';
import ModalView from '../../Component/Modal';


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Details = ({navigation,route}) => {
    const { pickedData } = route.params

    const [modalVisible, setModalVisible] = useState(false)

    const scale = useRef(new Animated.Value(1)).current
    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites.data)

    

    const handleClick = () => {
        if (favourites.find((item) => item.mal_id == pickedData.mal_id) ){
            const filteredArr = favourites.filter((item) => item.mal_id !== pickedData.mal_id)
            dispatch(removeFromFavourites(filteredArr))
        } else {
           
            Animated.sequence([
                Animated.timing(scale, {toValue: 1.5, duration: 200 , useNativeDriver: true}),
                Animated.timing(scale, {toValue: 1, duration: 500, useNativeDriver: true})
            ]).start();
            dispatch(addToFavourites(pickedData))
            setModalVisible(true)
        }
    }

    useEffect(() => {
        if (modalVisible === true){
            setTimeout(() => {
                setModalVisible(false)
            },800)
        }
    },[modalVisible])

    return (
        <SafeAreaView style={{flex: 1}}>
            {modalVisible ?
            <ModalView
            modalVisible
            setModalVisible={setModalVisible}
            />
            : null}
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.videoContainer}>
                    <Image
                    source={{uri : pickedData.images.jpg.large_image_url}}
                    style={styles.image}
                    resizeMode={'cover'}
                    />
                </View>
                <View style={styles.details}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30}}>
                        <View style={{flex: 0.8}}>
                            <Text style={styles.title}>{pickedData.title}</Text>
                            <View style={styles.genreContainer}>
                                
                                        <Text style={styles.genreText}>
                                            {pickedData.genres.map((item, index) => {
                                                return item.name  + (index == (pickedData.genres.length - 1 )? '' : ', ')
                                            })}
                                        </Text>
                                    
                            </View>
                            <Text style={{marginBottom: 10}}>{pickedData.rating}</Text>
                        </View>
                        
                        <View style={{flex: 0.2, alignItems: 'flex-end'}}> 
                            <Animated.View style={{transform: [{scale}]}}>
                                <TouchableOpacity onPress={handleClick}>
                                    <AntIcon  
                                        name={favourites.find((item) => item.mal_id == pickedData.mal_id ) ? "heart" : "hearto"} 
                                        color={favourites.find((item) => item.mal_id == pickedData.mal_id ) ? "red" : 'black'} 
                                        size={30} 
                                    />    
                                </TouchableOpacity>
                            </Animated.View> 
                        </View>
                    </View>
                    <View style={[styles.genreContainer, {justifyContent: 'space-around'}]}>
                        <View style={styles.year}>
                            <Text style={styles.subTitle}>Year</Text>
                            <Text style={styles.subDesc}>{pickedData.year ? pickedData.year : 'N/A'}</Text>
                        </View>
                        <View style={styles.year}>
                            <Text style={styles.subTitle}>Rank</Text>
                            <Text style={styles.subDesc}>{pickedData.rank ? pickedData.rank : 'N/A'}</Text>
                        </View>
                        <View style={styles.year}>
                            <Text style={styles.subTitle}>Score</Text>
                            <Text style={styles.subDesc}>{pickedData.score ? pickedData.score : 0}</Text>
                        </View>
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.descContent}>{pickedData.synopsis}</Text>
                    </View>
                </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    videoContainer: {
        height: SCREEN_HEIGHT / 3,
        width: SCREEN_WIDTH,
        marginTop: 20
    },
    image: {
        height: '100%',
        width: '90%',
        borderRadius: 26,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: 'white',
        flexGrow: 1
    },
    details: {
        marginVertical: 30,
        marginBottom: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    genreContainer: {
        flex: 0.7, 
        flexDirection: 'row',
        marginVertical: 10,
    },
    genreText: {
        color: 'gray',
        fontStyle: 'italic'
    }, 
    year: {
        justifyContent: 'center',
    },
    subTitle: {
        color: 'lightGray',
        fontStyle: 'italic',
        alignSelf: 'center',
        marginBottom: 10
    },
    subDesc: {
        fontSize:16,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    desc: {
        marginHorizontal: 20,   
        marginVertical: 20
    },
    descContent: {
        textAlign: 'justify'
    },
    buttonTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonContainer: {
        borderRadius: 26,
        backgroundColor: '#a83a32',
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 10,
        marginTop: 10
    },
})

export default Details