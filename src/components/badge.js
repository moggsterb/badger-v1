'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image,
  Component
} = ReactNative;

var Reflux = require('reflux');
var badgeStore = require('../stores/badgeStore');

import frame from './../styles/frame';


var styles = StyleSheet.create({
  container: {
    flex: 1,
		height: 400,
    justifyContent: 'center',
    alignItems: 'stretch',
		backgroundColor: '#600'
  },
  logo: {
    height: 200,
    width: 200,
  }
});

var Badge = React.createClass({
  mixins: [Reflux.listenTo(badgeStore, 'updateStates')],
  getInitialState: function() {
    return {
      shape: badgeStore._currentShape,
      stroke: badgeStore._currentStroke,
    };
  },
  updateStates: function(err) {
    if (err) {
      return;
    }
    this.setState({
      shape: badgeStore._currentShape,
      stroke: badgeStore._currentStroke
    });
  },
	render() {
    return (
      <View style={frame.badge}>
				<Text>Badge to go Here</Text>
        <Text>{this.state.shape}</Text>
        <Text>{this.state.stroke}</Text>
        <Image
          style={styles.logo}
          source={require('./../../badge.png')}
        />

      </View>
    );
  }
})

module.exports = Badge;
