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
    this._currentBadge = new Badge("Shape 1", "Style 1")
  },
  onBadgeShape: function(shape) {
    console.log("You want me to set the shape");
    console.log(shape);
    this._currentBadge.shape = shape;
    this.trigger(null);
  },
  onBadgeStyle: function(style) {
    console.log("Style Pressed !!!");
    this._currentBadge.style = style;
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
