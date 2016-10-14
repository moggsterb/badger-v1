'use strict';

var Reflux = require('reflux');

var Badge = require('./../data/badge');

var _ = require('underscore');

module.exports = Reflux.createStore({
  listenables: [require('../actions/badgeActions')],
  badges: {},
  init: function() {
    console.log("Store INIT");
    console.log("Load any Badges");
    this._currentBadge = new Badge(0, 0, 0, 0, 0, "Some Text", "More Text")
  },
  onBadgeShape: function(shape) {
    console.log("You want me to set the shape");
    console.log(shape);
    this._currentBadge.shape = shape[6];
    this.trigger(null);
  },
  onBadgeStyle: function(style) {
    console.log("Style Pressed !!!");
    this._currentBadge.style = style[6];
    this.trigger(null);
  },
  onBadgeIcon: function(icon) {
    console.log("Icon Pressed !!!");
    this._currentBadge.icon = icon[5];
    this.trigger(null);
  },
  onBadgeShuffleTheme: function() {
    console.log("Shuffle Pressed !!!");
    this._currentBadge.shuffle++;
    if (this._currentBadge.shuffle > 4) {
      this._currentBadge.shuffle = 0;
    }
    console.log(this._currentBadge.shuffle);
    this.trigger(null);
  },
  onBadgeTheme: function(theme) {
    console.log("Theme Pressed !!!");
    this._currentBadge.theme = theme[6];
    this.trigger(null);
  },

});
