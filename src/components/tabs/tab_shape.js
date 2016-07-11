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

import frame from './../../styles/frame';

var Reflux = require('reflux');
var badgeActions = require('../../actions/badgeActions');
var badgeStore = require('../../stores/badgeStore');

var TabShape = React.createClass({
  mixins: [Reflux.listenTo(badgeStore, 'updateStates')],
  getInitialState: function() {
    return {
      currentBadge: badgeStore._currentBadge,
    };
  },

  updateStates: function(err) {
    if (err) {
      return;
    }
    this.setState({
      currentBadge: badgeStore._currentBadge,
    });
  },

	_handlePress(shape) {
    console.log("Shape Pressed");
    badgeActions.badgeShape(shape);
	},

  render() {
    return (
			<View style={frame.container}>

	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 0" onPress={this._handlePress} active={this.state.currentBadge.shape == 0} />
						<DashIcon label="Shape 1" onPress={this._handlePress} active={this.state.currentBadge.shape == 1} />
            <DashIcon label="Shape 2" onPress={this._handlePress} active={this.state.currentBadge.shape == 2} />
						<DashIcon label="Shape 3" onPress={this._handlePress} active={this.state.currentBadge.shape == 3} />
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Shape 4" onPress={this._handlePress} active={this.state.currentBadge.shape == 4} />
						<DashIcon label="Shape 5" onPress={this._handlePress} active={this.state.currentBadge.shape == 5} />
						<DashIcon label="Shape 6" onPress={this._handlePress} active={this.state.currentBadge.shape == 6} />
						<DashIcon label="Shape 7" onPress={this._handlePress} active={this.state.currentBadge.shape == 7} />
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabShape;
