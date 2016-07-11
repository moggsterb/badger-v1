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

var TabTheme = React.createClass({
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
						<DashIcon label="Theme 0" onPress={this._handlePress} active={this.state.currentBadge.theme == 0} />
						<DashIcon label="Theme 1" onPress={this._handlePress} active={this.state.currentBadge.theme == 1} />
						<DashIcon label="Theme 2" onPress={this._handlePress} active={this.state.currentBadge.theme == 2} />
						<DashIcon label="Theme 3" onPress={this._handlePress} active={this.state.currentBadge.theme == 3} />
					</View>
					<View style={frame.dashRow}>
						<DashIcon label="Theme 4" onPress={this._handlePress} active={this.state.currentBadge.theme == 4} />
						<DashIcon label="Theme 5" onPress={this._handlePress} active={this.state.currentBadge.theme == 5} />
						<DashIcon label="Theme 6" onPress={this._handlePress} active={this.state.currentBadge.theme == 6} />
						<DashIcon label="Shuffle" onPress={this._handlePress} active={false} />
					</View>
	      </View>
			</View>
    );
  }
})

module.exports = TabTheme;
