'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  Component
} = ReactNative;

var styles = StyleSheet.create({
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#48BBEC',
	  borderWidth: 1,
	  borderRadius: 8,
	  margin: 2,
	  alignSelf: 'center',
	  justifyContent: 'center'
	},
	buttonText: {
		fontSize: 10,
		color: 'white',
		alignSelf: 'center'
	},
});

var DashIcon = React.createClass({

	propTypes: {
    label: React.PropTypes.string
  },

	_handlePress(data) {
		this.props.onPress(data)
	},

	render() {
    return (
			<TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this._handlePress.bind(this, this.props.label)}>
				<Text style={styles.buttonText}>{this.props.label}</Text>
			</TouchableHighlight>
    );
  }
})

module.exports = DashIcon;
