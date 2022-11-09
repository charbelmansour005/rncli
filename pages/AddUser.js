import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');

  const createUser = () => {
    console.log('OKNICE');
    try {
      axios
        .post('http://localhost:3001/postUsers', {
          name: name,
          age: age,
          username: username,
        })

        .then(data => {
          console.log(data.status);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.parent}>
      <TextInput
        style={styles.input}
        placeholder="Name..."
        placeholderTextColor="black"
        onChange={event => {
          setName(event.target.value);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Age..."
        placeholderTextColor="black"
        onChange={event => {
          setAge(event.target.value);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Username..."
        placeholderTextColor="black"
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <TouchableOpacity style={styles.myButton} onPress={createUser}>
        <Text style={styles.myButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    borderRadius: 5,
    backgroundColor: 'lightgray',
    padding: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  input: {
    width: '100%',
    padding: 12,
    marginTop: 5,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  myButton: {
    elevation: 8,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    width: '50%',
  },
  myButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    textTransform: 'capitalize',
  },
});
