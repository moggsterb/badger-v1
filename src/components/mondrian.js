'use strict';

var ReactNative = require('react-native');
var React = require('react');

var {
  StyleSheet,
  View,
  Text
} = ReactNative;

var Mondrian = React.createClass({
  render: function() {
    return (
      <View style={styles.parent}>
        <View style={styles.topBlock}>
          <View style={styles.leftCol}>
            <View style={[styles.cellOne, styles.base]} />
            <View style={[styles.cellTwo, styles.base]} />
          </View>
          <View style={[styles.cellThree, styles.base]} />
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}><Text style={styles.text}>1</Text></View>
          <View style={[styles.cellFive, styles.base]} />
          <View style={styles.bottomRight}>
            <View style={[styles.cellSix, styles.base]} />
            <View style={[styles.cellSeven, styles.base]} />
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  text: {
    backgroundColor: '#ffffff',
    textAlign: 'center'
  },
  parent: {
    flexDirection: 'column',
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0
  },
  topBlock: {
    flexDirection: 'row',
    flex: 5,
    backgroundColor: '#666'
  },
  bottomBlock: {
    flexDirection: 'row',
    flex: 2,
    backgroundColor: '#333'
  },
  leftCol: {
    flex: 2
  },
  base: {
    borderColor: '#000',
    borderWidth: 5
  },
  cellOne: {
    flex: 1,
  },
  bottomRight: {
    flexDirection: 'column',
    flex: 2,
  },
  cellTwo: {
    flex: 3,
  },
  cellThree: {
    flex: 5,
    backgroundColor: '#ff0000'
  },
  cellFour: {
    flex: 3,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  cellFive: {
    flex: 6,
  },
  cellSix: {
    flex: 1,
  },
  cellSeven: {
    flex: 1,
    backgroundColor: '#ffff00'
  },


})

module.exports = Mondrian;
