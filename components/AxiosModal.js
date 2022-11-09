import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export const AxiosModal = ({closeModal}) => {
  return (
    <View style={styles.modal_background}>
      <View style={styles.modal_container}>
        <Text style={styles.modal_title}>
          This data was fetched from jsonplaceholder, link:
          'https://jsonplaceholder.typicode.com/todos'
        </Text>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          style={styles.close_btn}
          onPress={() => {
            closeModal(false);
          }}>
          <Text style={styles.close_btn_text}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_background: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    zIndex: 9999999,
    backgroundColor: 'white',
  },
  modal_container: {
    border: 1.3,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 50,
    minHeight: 10,
    heigh: 10,
    backgroundColor: 'white',
  },
  modal_title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  close_btn: {
    backgroundColor: 'lightgray',
    textAlign: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingTop: 5,
    marginBottom: 10,
  },
  close_btn_text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  btn_container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});
