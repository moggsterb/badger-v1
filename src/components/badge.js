'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Image,
  Component,
  WebView
} = ReactNative;



var Reflux = require('reflux');
var badgeStore = require('../stores/badgeStore');

import frame from './../styles/frame';
var BGWASH = 'rgba(255,255,255,0.8)';
const HTML_start = `
<!DOCTYPE html>\n
<html>
  <head>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background: #444;
      }
      svg {
        width: 320px;
        height: 320px;
        margin: 0 auto;
        display: block;
      }
    </style>
  </head>
  <body>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" enable-background="new 0 0 300 300" xml:space="preserve">
`;
const HTML_finish = `
  </svg>
  </body>
</html>
`;

var Badge = React.createClass({
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
	render() {
    return (
      <View style={frame.badgeWrapper}>
        <WebView
          style={frame.badge}
          source={{html: HTML_start.concat(this.state.currentBadge.buildShape()).concat(HTML_finish)}}
          scalesPageToFit={false}
          automaticallyAdjustContentInsets={false}
          scrollEnabled={false}
        />
      </View>
    );
  }
})

module.exports = Badge;
