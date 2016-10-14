'use strict';

var ReactNative = require('react-native');
var React = require('react');
var BadgeEditor = require('./badgeEditor');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} = ReactNative;

import homepage from './../styles/homepage';

var Home = React.createClass({

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
      <View style={homepage.container}>
        <View style={homepage.masthead}><Text>LOGO</Text></View>
        <View style={homepage.menu}>
          <TouchableHighlight style={homepage.button} underlayColor='#555555' onPress={this._handleBadgeEditor}>
            <Text style={homepage.buttonText}>Badge Editor</Text>
          </TouchableHighlight>
        </View>
        <View style={homepage.footer}><Text>Footer Here</Text></View>
      </View>
    )
  }

})

module.exports = Home;
