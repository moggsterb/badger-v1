'use strict';

var Reflux = require('reflux');

var _ = require('underscore');

module.exports = Reflux.createStore({
  listenables: [require('../actions/badgeActions')],
  badges: {},
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
  OnBadgeUpdate: function(id, updates) {
    this.badges[id] = _.extend({}, this.badges[id], updates);
    this.trigger(null);
  },
  getAll: function() {
    return _.values(this.badges);
  },
});
