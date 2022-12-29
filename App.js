/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import JoaoPedro from 'projeto-joao-pedro';
import Leo from 'first-npm-component-leoderigo';


const App: () => Node = () => {



  return (
    <SafeAreaView>
      <JoaoPedro/>
      <Leo/>
    </SafeAreaView>
  );
};


export default App;
