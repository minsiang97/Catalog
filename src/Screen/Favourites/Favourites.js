import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image, Button } from 'react-native'
import SearchBar from '../../Component/Searchbar'
import { useDispatch, useSelector } from 'react-redux'
import { filterFromFavourites } from '../../redux/actions/Favourites'
import AntIcon from 'react-native-vector-icons/AntDesign'
import CardView2 from '../../Component/CardView2'

const Favourites = ({navigation, route}) => {
    const [searchContent, setSearchContent] = useState(null)
    const [favouritesList, setFavouritesList] = useState(null)
    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites.data)
    
    const onChangeText = (value) => {
        setSearchContent(value)
    }

    const removeText = () => {
        setSearchContent('')
    }

    useEffect(() => {
        setFavouritesList(favourites)
    },[])

    useEffect(() => {

        if ( searchContent && searchContent.length > 0){
            const filteredArr = favouritesList.filter((item) => (item.title.toLowerCase()).includes(searchContent.toLowerCase()))
            dispatch(filterFromFavourites(filteredArr))
        } else if (searchContent !== null) {
            dispatch(filterFromFavourites(favouritesList))         
        }
    },[searchContent])
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
            text={searchContent}
            onChangeText={onChangeText}
            removeText={removeText}
            />
            <Text style={styles.title}>My Favourites</Text>
            {favourites?.length > 0 ? 
            <FlatList
            data={favourites}
            numColumns={2}
            style={{marginHorizontal: 20}}
            columnWrapperStyle={
                favourites.length > 1 ?
                {
                    justifyContent:  'space-around'
                }
                :
                {
                    justifyContent: 'flex-start',
                }
            }
            keyExtractor={(item, index) => item.mal_id}
            renderItem={({item, index}) => {
                return (
                    <CardView2
                        title={item.title}
                        rating={item.rating}
                        score={item.score}
                        year={item.year}
                        image_url={item.images.jpg.image_url}
                        navigation={navigation}
                        pickedData={item}
                        index={index}
                    />
                )
            }}
            />
            : 
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Text>You haven't added any item into Favourites.</Text>
                <Text style={{marginTop: 10}}>Click here to browse a list of Anime</Text>
                <Button title="Click Here" style={{marginTop: 10}} onPress={() => navigation.navigate('Home', { screen: 'Airing' })}/>
            </View>
            }
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    container: {
        flex: 1
    }
})

export default Favourites