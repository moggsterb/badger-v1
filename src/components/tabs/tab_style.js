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

var TabStyle = React.createClass({
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

	_handlePress(style) {
    console.log("Style Pressed");
    badgeActions.badgeStyle(style);
	},

  render() {
    return (
			<View style={frame.tabContainer}>
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Style 0" onPress={this._handlePress} active={this.state.currentBadge.style == 0} enabled={this.state.currentBadge.styleEnabled(0)} />
						<DashIcon label="Style 1" onPress={this._handlePress} active={this.state.currentBadge.style == 1} enabled={this.state.currentBadge.styleEnabled(1)} />
						<DashIcon label="Style 2" onPress={this._handlePress} active={this.state.currentBadge.style == 2} enabled={this.state.currentBadge.styleEnabled(2)} />
						<DashIcon label="Style 3" onPress={this._handlePress} active={this.state.currentBadge.style == 3} enabled={this.state.currentBadge.styleEnabled(3)} />
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Style 4" onPress={this._handlePress} active={this.state.currentBadge.style == 4} enabled={this.state.currentBadge.styleEnabled(4)} />
						<DashIcon label="Style 5" onPress={this._handlePress} active={this.state.currentBadge.style == 5} enabled={this.state.currentBadge.styleEnabled(5)} />
						<DashIcon label="Style 6" onPress={this._handlePress} active={this.state.currentBadge.style == 6} enabled={this.state.currentBadge.styleEnabled(6)} />
						<DashIcon label="Style 7" onPress={this._handlePress} active={this.state.currentBadge.style == 7} enabled={this.state.currentBadge.styleEnabled(7)} />
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabStyle;
