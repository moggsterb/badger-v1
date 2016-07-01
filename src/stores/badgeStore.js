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
    this._currentBadge = new Badge("1", "1", "1", "1")
  },
  onBadgeShape: function(shape) {
    console.log("You want me to set the shape");
    console.log(shape);
    this._currentBadge.shape = shape[6]-1;
    this.trigger(null);
  },
  onBadgeStyle: function(style) {
    console.log("Style Pressed !!!");
    this._currentBadge.style = style[6]-1;
    this.trigger(null);
  },
  onBadgeIcon: function(icon) {
    console.log("Icon Pressed !!!");
    this._currentBadge.icon = icon[5]-1;
    this.trigger(null);
  },
  onBadgeTheme: function(theme) {
    console.log("Theme Pressed !!!");
    this._currentBadge.theme = theme[6]-1;
    this._currentBadge.shuffle = 0;
    this.trigger(null);
  },
  onBadgeShuffleTheme: function() {
    console.log("Shuffle Pressed !!!");
    this._currentBadge.shuffle++;
    if (this._currentBadge.shuffle == 5) {
      this._currentBadge.shuffle = 0;
    }
    console.log(this._currentBadge.shuffle);
    this.trigger(null);
  },



  onBadgeCreate: function(text) {
    console.log("Creating a badge!");
    var id = (+new Date() + Math.floor(Math.random() * 9999999)).toString(36);
    this.badges[id] = {
      id: id,
      text: text,
    };
    this.trigger(null);
  },
  onBadgeDelete: function(id) {
    console.log("HELLLO!!!!!!");
    console.log(id);
    delete this.badges[id];
    this.trigger(null);
  },
  onBadgeUpdate: function(id, updates) {
    this.badges[id] = _.extend({}, this.badges[id], updates);
    this.trigger(null);
  },
  getAll: function() {
    return _.values(this.badges);
  }
});
