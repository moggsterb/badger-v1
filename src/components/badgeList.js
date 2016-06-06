'use strict';

var ReactNative = require('react-native');
var React = require('react');


var {
  ListView,
  StyleSheet,
  View
} = ReactNative;

var Reflux = require('reflux');
var badgeStore = require('../stores/badgeStore');

var BadgeItem = require('./badgeItem');

var BadgeList = React.createClass({
  mixins: [Reflux.listenTo(badgeStore, 'handlerBadgeUpdate')],
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
    return {
      badgeDataSource: ds.cloneWithRows(badgeStore.getAll()),
    };
  },
  handlerBadgeUpdate: function(err) {
    if (err) {
      return;
    }
    this.setState({
      badgeDataSource: this.state.badgeDataSource.cloneWithRows(badgeStore.getAll()),
    });
  },

  render: function() {
    return (
      <ListView
        dataSource = {this.state.badgeDataSource}
        renderRow = {(rowData) => <BadgeItem badge={rowData} />}
      />
    );
  }
});

var styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#0ff'
  }
})

module.exports = BadgeList;
