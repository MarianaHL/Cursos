import React from 'react';
import {StyleSheet, View} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cajaMorada: {
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5056d6',
    // alignSelf: 'flex-end',
    // top: 100,
  },
  cajaNaranja: {
    // flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    // alignSelf: 'center',
    // left: 100,
    top: 50,
  },
  cajaAzul: {
    // flex: 2,
    // alignSelf: 'stretch',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#33b1e2',
    // alignSelf: 'center',
  },
});

export default TareaScreen;
