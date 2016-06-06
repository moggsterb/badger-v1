'use strict';

var ReactNative = require('react-native');
var React = require('react');


var {
  View,
  StyleSheet,
  TextInput
} = ReactNative;

var badgeActions = require('../actions/badgeActions');
var badgeStore = require('../stores/badgeStore');

var BadgeList = React.createClass({
  propTypes: {
    value: React.PropTypes.string,
  },
  getInitialState: function() {
    return {
      value: '',
    };
  },
  render: function() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({value: text})}
          onBlur = {this._save}
          placeHolder={'Badge Stuff'}
          value={this.state.value}
        />
      </View>
    );
  },
  _save: function() {
    var text = this.state.value;
    if (text) {
      badgeActions.badgeCreate(text);
      this.setState({
        value: ''
      });
    }
  },
});

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

module.exports = BadgeList;
