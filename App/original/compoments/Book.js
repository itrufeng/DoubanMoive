'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  Text,
  View,
  Image
} = ReactNative;

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      name: props.name,
      author: props.author
    }
  }
  render() {
    return (
      <View>
        <View style={styles.image}>
          <Image style={styles.thumbnail}
          resizeMode='cover'
          source={this.state.image} />
        </View>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>
          {this.state.name}
        </Text>
        <Text style={styles.author} numberOfLines={1} ellipsizeMode='tail'>
          {this.state.author}
        </Text>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  image: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0.5,
      height: 0.5
    },
    shadowOpacity: 0.3,
    margin: 5
  },
  thumbnail: {
    width: 82,
    height: 130,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    color: '#616161',
    width: 82
  },
  author: {
    marginTop: 5,
    fontSize: 12,
    color: '#B0B0B0',
    width: 82
  }
})
