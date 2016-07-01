'use strict';
var DashIcon = require('./dash_icon');
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
	TouchableHighlight,
  Component
} = ReactNative;

var badgeActions = require('../../actions/badgeActions');
var badgeStore = require('../../stores/badgeStore');

import frame from './../../styles/frame';

var TabTheme = React.createClass({

	_handlePress(theme) {
    console.log("Theme Pressed");
    if (theme == "Shuffle") {
      badgeActions.badgeShuffleTheme();
    } else {
      badgeActions.badgeTheme(theme);
    }
	},




  render() {
    return (
			<View style={frame.container}>

	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Theme 1" onPress={this._handlePress}/>
						<DashIcon label="Theme 2" onPress={this._handlePress}/>
						<DashIcon label="Theme 3" onPress={this._handlePress}/>
						<DashIcon label="Theme 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Theme 5" onPress={this._handlePress}/>
						<DashIcon label="Theme 6" onPress={this._handlePress}/>
						<DashIcon label="Theme 7" onPress={this._handlePress}/>
						<DashIcon label="Shuffle" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabTheme;
