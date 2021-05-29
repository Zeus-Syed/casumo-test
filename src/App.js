/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import AppNavigator from './Navigation/Navigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from "./Redux/index"; 
import {PersistGate} from 'redux-persist/es/integration/react'



const App: () => Node = () => {
  

  return (
    <SafeAreaProvider>
    <Provider store={store.store}>
     
        <PersistGate persistor={store.persistor}>
          <AppNavigator />
        </PersistGate>
     
    </Provider>
  </SafeAreaProvider>
  );
};

export default App;
