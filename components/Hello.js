import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

export const Hello = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View>
          <Text style={styles.dateText}>
            Hello, today is: {date}/{month}/{year}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#d64161',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  dateText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
