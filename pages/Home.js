import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Hello} from '../components/Hello';

export const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.centered}>
      <ScrollView>
        <View>
          <Hello />
          <TouchableOpacity
            style={styles.myButton}
            onPress={() => navigation.navigate('Todos')}>
            <Text style={styles.myButtonText}>Check Data</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myButton}
            onPress={() => navigation.navigate('Add User')}>
            <Text style={styles.myButtonText}>add users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myButton}
            onPress={() => navigation.navigate('Get User')}>
            <Text style={styles.myButtonText}>check users</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centered: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  myButton: {
    elevation: 8,
    backgroundColor: '#feb236',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  myButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    textTransform: 'capitalize',
  },
});
