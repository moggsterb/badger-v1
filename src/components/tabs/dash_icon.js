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
      active: 0,
    };
  },

	_handlePress(data) {
		this.props.onPress(data)
	},

	render() {
    return (
			<TouchableHighlight style={[icons.button, this.props.active && icons.buttonActive]} underlayColor='#444' onPress={this._handlePress.bind(this, this.props.label)}>
				<Text style={[icons.buttonText, this.props.active && icons.buttonTextActive]}>{this.props.label}</Text>
			</TouchableHighlight>
    );
  }
})

module.exports = DashIcon;
