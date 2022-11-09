import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const GetUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/getUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <ScrollView>
      {users?.map(user => {
        return (
          <View key={Math.random() * 99999}>
            <View style={styles.view_centered}>
              <View style={styles.datastyle}>
                <Text style={styles.dataText}>{user.name}</Text>
                <Text style={styles.dataText}>{user.age}</Text>
                <Text style={styles.dataText}>{user.username}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'gray',
  },
  api_data: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  view_centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  datastyle: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
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
});
