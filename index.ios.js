'use strict';

var ReactNative = require('react-native');
var React = require('react');

var Home = require('./src/components/home')

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = ReactNative;

var mainView = React.createClass({
  render: function() {
    return (
      <NavigatorIOS barTintColor='#48bbec' titleTextColor='#ffffff' style={styles.navigator} initialRoute={{ title: 'Badger', component: Home}} />
    );
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: 'orange'
  }
});

AppRegistry.registerComponent('Badger', () => mainView);
