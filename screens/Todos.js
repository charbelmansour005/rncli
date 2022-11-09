import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AxiosModal} from '../components/AxiosModal';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Todos = () => {
  const [content, setContent] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      var _temp_data = [];
      response.data.forEach(element => {
        _temp_data.push(element.title);
      });
      setContent(_temp_data);
    });
  }, []);
  return (
    <ScrollView style={styles.backgnd}>
      <View style={styles.titleCard}>
        <Text style={styles.title}>Todos API</Text>
      </View>
      <View>{openModal && <AxiosModal closeModal={setOpenModal} />}</View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          onPress={() => {
            setOpenModal(true);
          }}
          style={styles.infoBtn}>
          <Text style={styles.info}>i</Text>
        </TouchableOpacity>
      </View>

      {content?.map(index => {
        return (
          <View style={styles.view_centered} key={Math.random() * 999}>
            <View style={styles.datastyle}>
              <Text style={styles.dataText}>{index}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view_centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  infoBtn: {
    backgroundColor: 'gray',
    textAlign: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    paddingTop: 5,
    marginBottom: 10,
    marginTop: 15,
  },
  info: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  titleCard: {
    padding: 10,
    height: 50,
    width: '100%',
    borderColor: 'black',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    textTransform: 'capitalize',
  },
  backgnd: {
    backgroundColor: 'white',
  },
  datastyle: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 5,
    width: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  dataText: {
    color: 'black',
    fontSize: 14,
    margin: 5,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  modal: {
    backgroundColor: 'white',
    margin: 0, // This is the important style you need to set
    alignItems: undefined,
    justifyContent: undefined,
  },
});
