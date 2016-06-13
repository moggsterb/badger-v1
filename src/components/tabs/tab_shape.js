'use strict';
var Badge = require('./../badge');
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

var TabShape = React.createClass({

	_handlePress(shape) {
		// this.props.onPress(data)
    console.log("Shape Pressed");
    badgeActions.badgeShape(shape);
	},

  render() {
    return (
			<View style={frame.container}>
				<Badge />
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 1" onPress={this._handlePress}/>
						<DashIcon label="Shape 2" onPress={this._handlePress}/>
						<DashIcon label="Shape 3" onPress={this._handlePress}/>
						<DashIcon label="Shape 4" onPress={this._handlePress}/>
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 5" onPress={this._handlePress}/>
						<DashIcon label="Shape 6" onPress={this._handlePress}/>
						<DashIcon label="Shape 7" onPress={this._handlePress}/>
						<DashIcon label="Shape 8" onPress={this._handlePress}/>
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabShape;
