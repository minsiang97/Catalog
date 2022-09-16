import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";
import Modal from 'react-native-modal'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const ModalView = (props) => {
    const {modalVisible, setModalVisible} = props
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        animationIn={'fadeIn'}
        transparent={true}
        isVisible={modalVisible}
        hasBackdrop={false}
        animationInTiming={500}
        animationOutTiming={500}
        useNativeDriver={true}
      >
          <View style={styles.modalView}>
              <Text style={styles.modalText} >Added to Favourites</Text>
          </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: SCREEN_WIDTH / 3,
    alignSelf: 'center',
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ModalView;