'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;
import SearchBar from './SearchBar';

export default class OriginalPage extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.search}>
          <SearchBar value="原创作品 / 中文图书 / 英文图书" />
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  view: {
    flex: 1
  },
  search: {
    backgroundColor: '#F7F7F7',
    padding: 10
  }
});
