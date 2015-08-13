'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.init = function init() {
  var done = this.async();
  this.dir = path.join(this.config.get('directiveDirectory'), this.name);
  this.complex = true;
  done();
};

Generator.prototype.createFiles = function createFiles() {
  var configName = 'directiveSimpleTemplates';
  var templateDir = path.join(this.sourceRoot(), 'directiveSimple');
  if (this.complex) {
    configName = 'directiveComplexTemplates';
    templateDir = path.join(this.sourceRoot(), 'directiveComplex');
  }

  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'));
  ngUtil.copyTemplates(this, 'directive', templateDir, configName);
};

Generator.prototype.updateSassReferences = function updateSassReferences() {
  // Append component style
  var scssUrl = path.join('../js/components', this.name, this.name);
  var rootScssFilePath = path.join(this.config.get('sassDirectory'), 'main.scss');
  var rootScssFile = this.readFileAsString(rootScssFilePath);
  console.log(rootScssFile.indexOf(scssUrl));
  if (rootScssFile.indexOf(scssUrl) >= 0) return; // Don't add the include if it already exists

  rootScssFile = rootScssFile + "\n@import '" + scssUrl + "';";
  this.write(rootScssFilePath, rootScssFile);
}
