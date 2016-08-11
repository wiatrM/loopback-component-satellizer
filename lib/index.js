'use strict';

var path = require('path');
var SG = require('strong-globalize');
SG.SetRootDir(path.join(__dirname, '..'));

var loopback = require('loopback');
var DataModel = loopback.PersistedModel || loopback.DataModel;

exports.Configurator = require('./configurator');