import React, {useState, useEffect} from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import CardView from '../../Component/CardView';
import SearchBar from '../../Component/Searchbar';
import LoadingSpinnerComponent from 'react-native-loading-spinner-overlay'
import { useSelector, useDispatch } from 'react-redux';
import { callUpcomingAnimeAPI, getUpcomingAnimeList, filterUpcomingAnimeList, endUpcomingAnimeList, errorUpcomingAnimeList } from '../../redux/actions/Upcoming';


const Upcoming = ({ navigation }) => {

    const [animeList, setAnimeList] = useState([])
    const [searchContent, setSearchContent] = useState("")
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const animeListToDisplay = useSelector(state => state.upcoming.data)
    const loadingSpinner = useSelector(state => state.upcoming.loading)
    const listLoading = useSelector(state => state.upcoming.moreLoading)
    const endList = useSelector(state => state.upcoming.isListEnd)
    const errorMessage = useSelector(state => state.upcoming.error)
    
    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        dispatch(callUpcomingAnimeAPI(page))
        fetch(`https://api.jikan.moe/v4/anime?status=upcoming&page=${page}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resp => {
            console.log(resp)
            if (resp.pagination.has_next_page === false){
                dispatch(endUpcomingAnimeList())
            }
            setAnimeList([...animeList, ...resp.data])
            dispatch(getUpcomingAnimeList(resp.data))
        })
        .catch((error) => {
            dispatch(errorUpcomingAnimeList('Server Error, Please Try Again Later'))
        });
    }

    useEffect(() => {
        if (searchContent.length > 0){
            const filteredArr = animeList.filter((item) => (item.title.toLowerCase()).includes(searchContent.toLowerCase()))
            dispatch(filterUpcomingAnimeList(filteredArr))
        } else {
            dispatch(filterUpcomingAnimeList(animeList))

        }
    },[searchContent])

    useEffect(() =>{
        if (page > 1){
            getData()
        }
    },[page])

    const onChangeText = (value) => {
        setSearchContent(value)
    }

    const removeText = () => {
        setSearchContent('')
    }

    const getMoreData = () => {
        if (!endList){
            setPage(page + 1)
        }   
    }

    const renderEmpty = () => {
        return (
            <>
            {listLoading ? 
                null
            :
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Sorry, there are no data available</Text>
                </View>
            }
            </>
        )
        
    }

    const renderError = () => {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{errorMessage}</Text>
                <Button title="Refresh" onPress={getData}/>
            </View>
        )
        
    }

    const renderFooter = () => {
        return (
            <View style={{alignSelf: 'center', marginVertical: 10}}>
                {listLoading ?
                    <ActivityIndicator size={20}/>
                : 
                    null
                }
                {endList ?
                    <Text>No more data at the moment</Text>
                : 
                    null
                }
                
            </View>
        )
    }
    
  return (
    <SafeAreaView style={styles.container}>
        <SearchBar
            text={searchContent}
            onChangeText={onChangeText}
            removeText={removeText}
        />
        <Text style={styles.sectionTitle}>Upcoming Shows</Text>
        {!loadingSpinner ?
            <>
            <FlatList
                data={animeListToDisplay}
                contentContainerStyle={{ flexGrow: 1 }}
                keyExtractor={(item, id) => item.mal_id}
                onEndReachedThreshold={0.2}
                onEndReached={getMoreData}
                ListEmptyComponent={renderEmpty}
                ListFooterComponent={renderFooter}
                renderItem={({item, index}) => {
                    return (
                        <CardView
                        name={item.title}
                        rating={item.rating}
                        score={item.score}
                        year={item.year}
                        image_url={item.images.jpg.image_url}
                        navigation={navigation}
                        pickedData={item}
                        ndex={index}
                        />
                    )
                }}
            />
            </>
        : 
        <>
            {errorMessage ? 
                <>
                {renderError()}
                </>
               :
               <>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={20}/>
                </View>
                </>
            }
        </>
        }
    </SafeAreaView>
    
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
    text: {
        marginTop: 5
    },
    sectionTitle: {
        margin: 10, 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginLeft: 30
    }
})

export default Upcoming