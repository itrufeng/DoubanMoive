'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Image,
  ScrollView
} = ReactNative;
import PageControl from 'react-native-page-control';

export default class BookAd extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <ScrollView style={styles.content}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <View>
            <Text>1</Text>
          </View>
          <View>
            <Text>2</Text>
          </View>
          <View>
            <Text>3</Text>
          </View>
          <View>
            <Text>4</Text>
          </View>
          <View>
            <Text>5</Text>
          </View>
        </ScrollView>
        <PageControl
          style={styles.pageControl}
          numberOfPages={3}
          currentPage={0}
          hidesForSinglePage={true}
          pageIndicatorTintColor='#C5C5C5'
          currentPageIndicatorTintColor='#6AC8AE'
          indicatorStyle={{borderRadius: 5}} 
          currentIndicatorStyle={{borderRadius: 5}}
          indicatorSize={{width:8, height:8}}
          onPageIndicatorPress={this.onItemTap} />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  view: {
    padding: 10
  },
  content: {
    backgroundColor: 'red'
  },
  pageControl: {
    marginTop: 20
  }
})

