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

var TabStyle = React.createClass({

	_handlePress(style) {
    console.log("Style Pressed");
    badgeActions.badgeStyle(style);
	},

  render() {
    return (
			<View style={frame.container}>
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Style 1" onPress={this._handlePress}/>
						<DashIcon label="Style 2" onPress={this._handlePress}/>
						<DashIcon label="Style 3" onPress={this._handlePress}/>
						<DashIcon label="Style 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Style 5" onPress={this._handlePress}/>
						<DashIcon label="Style 6" onPress={this._handlePress}/>
						<DashIcon label="Style 7" onPress={this._handlePress}/>
						<DashIcon label="Style 8" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabStyle;
