'use strict';

let React = require('react');
let ReactNative = require('react-native');
let {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Image
} = ReactNative;

let searchIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADAUlEQVRoQ+2aj5ENQRCHfxeBkwEROBEgAkTARYAIEAEiQARHBIjAiQARIALqU91V8/Z233TP7LJv66bq1d27N7PT3/Sf6e53R9rIONoIhy5BTJPHkm5JuifpmiTen9hn55J+Svom6Z2kT/Z+ESNo1QjCPjWAjGAAPZcE5KwjC8KpA/CwkIKTRkDXgAsJrGuI+TeKNW8MCG3NMjIgmM9rE+6XpJf2wnwiA6jH9rpiZnZf0sfI4tqcKMgjE5rnvTdhWk8TrXIId0044F7VBK19HgFhoxf2oCcFUO3Ztc9nfW4NBHM6M4lOJWHbcw58B3Nl3Okxs30gmMBn84k5NTE8CNcMvnbTwnX6sPaBcPoPzCfQzJKDqIfPvB1ExPCeUyCETrRBdOL3VseOCoL2v9pktJK+Z6ZA/IS4vJ5Fpemcxz7cUUTFtAWMgRDvf5hQV5dMKwbg5b61IHThzMYWeKTixr7decrZ5ZgUGQAXJVYRHmMg7uRLRqopAT2CpZ1+DISUgYy2K66Hj3J3IhbwwTLllDWMgRCtiFRN0aMRwJd5tMTE2D88xkB+2+q0w4V33T+xaf9Ng3jk+J+m9aWoNEOK3rSzbyb8+oWYjhwhG9g/ySPmLBfiGlKUdGq0xqQxfauj5Foa31XsJEytTOOvt5QNkcKK5A2bXXJQTuObzYlqrdTF4WndLJlAeh1CEYdmou2lnYOtpSGexLFo6eZDOlKVJDUQ5pZtm1l6UCYA1WBZfXYdVARkCIPPYGqtdTzmQ59srJxthomCAIOZAeHtTrqFdAijNs39RMfStYBP8KzhaILJgLAhp4kgtIl8EBBIa/iJcGUTG0GpMWjE+dcNrKPBwN+8n9wNkwXxDREKIO/fRkMzlx3QZeO67DaWz0lpphWk3JBTLb/o8a8PvpsfoSEE5zVlht0wc4BEtVGb1wWzJhBAm2HWBtIMs0aQJpi1gqRh1gySglk7SBjmEECmYHYqyUMBGcJcKIcPCcRhSF7Lf1j4e9EeGshkdnAJUkuc/vXnfwCQVbEz/+Ph+QAAAABJRU5ErkJggg==';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value}
  }
  render() {
    return (
      <View style={styles.view}>
        <Image style={styles.searchIcon} source={{uri: searchIconBase64, scale: 3}} />
        <Text style={styles.searchText}>{this.state.value}</Text>
      </View>
    )
  }
}

SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired
};

let styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E6E6E6'
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  searchText: {
    color: '#989898'
  }
});
