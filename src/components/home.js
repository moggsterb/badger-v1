'use strict';

var ReactNative = require('react-native');
var React = require('react');

var BadgeList = require('./badgeList');
var BadgeCreate = require('./badgeCreate');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = ReactNative;

var Home = React.createClass({

  _handleListBadges: function() {
    this.props.navigator.push({
      title: "My Badges",
      component: BadgeList
    })
  },

  _handleCreateBadge: function() {
    this.props.navigator.push({
      title: "Create Badge",
      component: BadgeCreate
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.masthead}><Text>LOGO</Text></View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleListBadges}>
            <Text style={styles.buttonText}>My Badges</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handleCreateBadge}>
            <Text style={styles.buttonText}>Create Badge</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footer}><Text>Footer Here</Text></View>
      </View>
    )
  }

})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  masthead: {
    flex: 6,
    backgroundColor: '#666'
  },
  menu: {
    flex: 3,
    backgroundColor: '#444'
  },
  footer: {
    flex: 2,
    backgroundColor: '#333'
  },
  button: {
    flex: 1,
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }

});

module.exports = Home;
