import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import store from '@/store/redux/store'
import MainScreen from '@/MainScreen'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainScreen/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

