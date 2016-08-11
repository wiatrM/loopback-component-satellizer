'use strict';

var SG = require('strong-globalize');
var g = SG();

var loopback = require('loopback');
var _ = require('underscore');

module.exports = Configurator;

/**
 * Configurator object
 * @param {Object} app The LoopBack app instance
 * @returns {Configurator}
 * @constructor
 * @class
 */
function Configurator(app) {
  if (!(this instanceof Configurator)) {
    return new Configurator(app);
  }
  this.app = app;
}

Configurator.prototype.run = function(options) {
    console.log("Package test");
}