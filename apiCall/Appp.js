//*************** Hello

import {SUCCESS, FAIL} from './src/redux/action/actionType';
import axios from 'axios';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

var kk = SUCCESS + '_' + FAIL;

const HelloWorldApp = () => {
  useEffect(() => {
    try {
      const users = axios.get('https://api.covid19api.com/');
      console.log('aaaa', users);
    } catch (err) {
      return console.error(err);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world! {kk}</Text>
    </View>
  );
};
export default HelloWorldApp;
