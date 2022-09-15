import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import { useSelector, useDispatch } from 'react-redux';
import { addToFavourites } from '../../redux/actions/Favourites';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Details = ({navigation,route}) => {
    const { pickedData } = route.params
   
    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites.data)

    const handleClick = () => {
        if (favourites.find((item) => item.mal_id == pickedData.mal_id) ){
            return
        } else {
            dispatch(addToFavourites(pickedData))
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.videoContainer}>
                <Image
                source={{uri : pickedData.images.jpg.large_image_url}}
                style={styles.image}
                resizeMode={'cover'}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{pickedData.title}</Text>
                <View style={styles.genreContainer}>
                    {pickedData.genres.map((item, index) => {
                        return (
                            <Text style={styles.genreText}>{item.name}{index == (pickedData.genres.length - 1 )? "" : "," } </Text>
                        )
                    })}
                </View>
                <Text style={{alignSelf: 'center', marginBottom: 10}}>{pickedData.rating}</Text>
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
                <TouchableOpacity 
                    style={
                        favourites.find((item) => item.mal_id == pickedData.mal_id) ? 
                        [styles.buttonContainer, {opacity: 0.5}] 
                        : styles.buttonContainer
                    }
                    activeOpacity={
                        favourites.find((item) => item.mal_id == pickedData.mal_id) ?
                        0.5
                        :
                        0
                    }
                    onPress={handleClick}
                >
                    <View style={styles.buttonTextContainer}>
                        {favourites.find((item) => item.mal_id == pickedData.mal_id) ? 
                        <>
                        <Octicons name="diff-added" size={25} color={'white'}/>
                        <Text style={styles.buttonText}>ADDED INTO FAVOURITES</Text>
                        </>
                        :
                        <>
                        <Octicons name="diff-added" size={25} color={'white'}/>
                        <Text style={styles.buttonText}>ADD TO FAVOURITES</Text>
                        </>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        alignSelf: 'center'
    },
    genreContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center'
    },
    genreText: {
        color: 'lightGray',
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
    }
})

export default Details