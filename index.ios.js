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
      <View style={styles.view}>
        <TabBar></TabBar>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: 20
  }
});

AppRegistry.registerComponent('DoubanMoive', () => DoubanMoive);
