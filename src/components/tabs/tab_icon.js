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

var TabIcon = React.createClass({

	_handlePress(icon) {
    console.log("Icon Pressed");
    badgeActions.badgeIcon(icon);
	},

  render() {
    return (
			<View style={frame.container}>
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Icon 1" onPress={this._handlePress}/>
						<DashIcon label="Icon 2" onPress={this._handlePress}/>
						<DashIcon label="Icon 3" onPress={this._handlePress}/>
						<DashIcon label="Icon 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Icon 5" onPress={this._handlePress}/>
						<DashIcon label="Icon 6" onPress={this._handlePress}/>
						<DashIcon label="Icon 7" onPress={this._handlePress}/>
						<DashIcon label="Icon 8" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabIcon;
