/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabBar from './App/home/components/TabBar';

export default class DoubanMoive extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TabBar></TabBar>
      </View>
    );
  }
}

AppRegistry.registerComponent('DoubanMoive', () => DoubanMoive);
