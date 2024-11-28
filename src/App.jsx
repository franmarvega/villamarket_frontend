import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import store from '@/redux/store'
import MainView from '@/views/MainView'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainView/>
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

