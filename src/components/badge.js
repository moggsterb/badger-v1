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

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';


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
      <Svg
                height="100"
                width="100"
            >
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
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
