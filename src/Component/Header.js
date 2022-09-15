import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {APIContext} from '../../context-provider/APIContext';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Header = ({openDrawer}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <View
          style={{
            width: SCREEN_WIDTH / 3,
            paddingLeft: 10,
            flex: 1,
          }}>
          <TouchableOpacity onPress={() => openDrawer.openDrawer()}>
            <Image
              source={require('../assets/drawer.png')}
              resizeMode="contain"
              style={{
                width: SCREEN_WIDTH / 12,
                height: SCREEN_HEIGHT / 12
              }}
            />
          </TouchableOpacity>
        </View>
        <View
            style={{
                width: SCREEN_WIDTH / 3,
                flex: 1,
            }}
        >
            <Text style={{fontWeight: 'bold', fontSize:18, alignSelf: 'center'}}>MyAnime</Text>
        </View>
        <View style={{width: SCREEN_WIDTH / 3}}/>
        <View/>
    </View>
  );
};

export default Header;
