'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  Component
} = ReactNative;

import icons from './../../styles/icons';

var styles = StyleSheet.create({

});

var DashIcon = React.createClass({


	propTypes: {
    label: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      id: 0,
      active: false,
      enabled: false,
    };
  },

	_handlePress(data) {
    this.props.onPress(data);
	},

	render() {
    var action = this._handlePress.bind(this, this.props.label);
    return (
			<TouchableHighlight style={[icons.button, this.props.enabled && icons.buttonEnabled, this.props.active && icons.buttonActive]} disabled={!this.props.enabled} underlayColor='#444' onPress={action}>
				<Text style={[icons.buttonText, this.props.active && icons.buttonTextActive]}>{this.props.label}</Text>
			</TouchableHighlight>
    );
  }
})

module.exports = DashIcon;
