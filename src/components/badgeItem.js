'use strict';

var ReactNative = require('react-native');
var React = require('react');


var {
  View,
  StyleSheet,
  Text,
  TextInput
} = ReactNative;

var Reflux = require('reflux');
var badgeActions = require('../actions/badgeActions');

var BadgeItem = React.createClass({
  render: function () {
    var badge = this.props.badge;
    return (
      <View>
        <View style = {styles.badgeItem}>
          <Text style = {styles.text}>{badge.text} {badge.id}</Text>
          <Text onPress={() => this._onDelete(badge)}>Delete</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  },
  _onDelete: function(badge) {
    badgeActions.badgeDelete(badge.id);
  }

});

var styles = StyleSheet.create({
  badgeItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    height: 58,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
  }
})

module.exports = BadgeItem;
