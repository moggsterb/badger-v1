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

var TabIcon = React.createClass({
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

	_handlePress(icon) {
    console.log("Icon Pressed");
    badgeActions.badgeIcon(icon);
	},

  render() {
    return (
			<View style={frame.tabContainer}>
	      <View style={frame.dash}>
					<View style={frame.dashRow}>
						<DashIcon label="Icon 0" onPress={this._handlePress} active={this.state.currentBadge.icon == 0} enabled={this.state.currentBadge.iconEnabled(0)} />
						<DashIcon label="Icon 1" onPress={this._handlePress} active={this.state.currentBadge.icon == 1} enabled={this.state.currentBadge.iconEnabled(1)} />
						<DashIcon label="Icon 2" onPress={this._handlePress} active={this.state.currentBadge.icon == 2} enabled={this.state.currentBadge.iconEnabled(2)} />
						<DashIcon label="Icon 3" onPress={this._handlePress} active={this.state.currentBadge.icon == 3} enabled={this.state.currentBadge.iconEnabled(3)} />
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Icon 4" onPress={this._handlePress} active={this.state.currentBadge.icon == 4} enabled={this.state.currentBadge.iconEnabled(4)} />
						<DashIcon label="Icon 5" onPress={this._handlePress} active={this.state.currentBadge.icon == 5} enabled={this.state.currentBadge.iconEnabled(5)} />
						<DashIcon label="Icon 6" onPress={this._handlePress} active={this.state.currentBadge.icon == 6} enabled={this.state.currentBadge.iconEnabled(6)} />
						<DashIcon label="Icon 7" onPress={this._handlePress} active={this.state.currentBadge.icon == 7} enabled={this.state.currentBadge.iconEnabled(7)} />
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabIcon;
