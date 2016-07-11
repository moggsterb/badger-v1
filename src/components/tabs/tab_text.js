'use strict';
var DashIcon = require('./dash_icon');
var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TextInput,
	TouchableHighlight,
  Component
} = ReactNative;

var badgeActions = require('../../actions/badgeActions');
var badgeStore = require('../../stores/badgeStore');

import frame from './../../styles/frame';

var TabText = React.createClass({

	_handlePress(theme) {
    console.log("Text Pressed");
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
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({value: text})}
          onBlur = {this._save}
          placeHolder={'Enter Copy'}
          value={this.state.value}
        />
	      </View>
			</View>
    );
  }
})

var styles = StyleSheet.create({
  header: {
    marginTop: 100,
  },
  textInput: {
    height: 40,
    backgroundColor: '#eeeeee',
    padding: 10,
    fontSize: 16,
  },
});

module.exports = TabText;
