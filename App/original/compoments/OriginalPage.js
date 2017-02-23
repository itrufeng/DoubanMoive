'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

export default class OriginalPage extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>原创</Text>
      </View>
    )
  }
}
