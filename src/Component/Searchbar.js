import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const SearchBar = (props) => {
    const {
        text,
        onChangeText,
        removeText
    } = props
    return (
        <View style={styles.container}>
            <View style={{flex: 0.1}}>
                <FeatherIcon name="search" size={20} />
            </View>
            <View style={{flex: 0.8}}>
                <TextInput
                placeholder="Search here..."
                value={text}
                onChangeText={onChangeText}
                />
            </View>
            <View style={{flex: 0.1}}>
                {text?.length > 0 ?
                <EntypoIcon onPress={removeText} name="cross" size={20} />
                : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 26,
        padding: 10
    },
})

export default SearchBar