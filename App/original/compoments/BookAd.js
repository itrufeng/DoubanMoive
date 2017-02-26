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
import Book from './Book';

export default class BookAd extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <ScrollView style={styles.content}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.firstBook}>
            <Book image={require('../images/6032026.jpg')} 
              name='中土世界漂流记' 
              author='伍酱' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/5962464.jpg')} 
              name='从菜鸟到达人' 
              author='细西粒' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/5957950.jpg')} 
              name='Mystery' 
              author='三藏' />
          </View>
          <View style={styles.firstBook}>
            <Book image={require('../images/14913.jpg')} 
              name='你可以拥有你想要的生活' 
              author='艾小美' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/281635.jpg')} 
              name='豆瓣阅读书评' 
              author='豆豆' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/717392.jpg')} 
              name='一直走直到我遇见你' 
              author='香谢笑' />
          </View>
          <View style={styles.firstBook}>
            <Book image={require('../images/1235202.jpg')} 
              name='停云剑歌' 
              author='水井' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/1780846.jpg')} 
              name='硅谷爱情故事' 
              author='袁坐芙' />
          </View>
          <View style={styles.book}>
            <Book image={require('../images/2689656.jpg')} 
              name='白事会' 
              author='玉琴' />
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
  firstBook: {
    marginLeft: 0
  },
  book: {
    marginLeft: 40
  },
  pageControl: {
    marginTop: 20
  }
})

