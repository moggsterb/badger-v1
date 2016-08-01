'use strict';

var ReactNative = require('react-native');
var React = require('react');

var BadgeList = require('./badgeList');
var BadgeCreate = require('./badgeCreate');
var BadgeEditor = require('./badgeEditor');
var Mondrian = require('./mondrian');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = ReactNative;

var Home = React.createClass({

  _handleMondrian: function() {
    this.props.navigator.push({
      title: "Mondrian",
      component: Mondrian
    })
  },

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

  _handleBadgeEditor: function() {
    this.props.navigator.push({
      title: "Badge Editor",
      component: BadgeEditor,
      rightButtonTitle: "Share",
      onRightButtonPress: () => this.props.navigator.push({
        title: "Share This Shit",
        component: BadgeEditor
      })
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.masthead}><Text>LOGO</Text></View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} underlayColor='#555555' onPress={this._handleMondrian}>
            <Text style={styles.buttonText}>Mondrian</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='#555555' onPress={this._handleListBadges}>
            <Text style={styles.buttonText}>My Badges</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='#555555' onPress={this._handleCreateBadge}>
            <Text style={styles.buttonText}>Create Badge</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} underlayColor='#555555' onPress={this._handleBadgeEditor}>
            <Text style={styles.buttonText}>Badge Editor</Text>
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
    backgroundColor: '#555555',
    borderColor: '#888888',
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
