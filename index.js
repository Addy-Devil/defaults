'use strict';

/**
 * Module dependencies.
 */

// XXX: Hacky fix for Duo not supporting scoped modules
var rest; try { rest = require('@ndhoule/rest'); } catch(e) { rest = require('ndhoule/rest'); }

/**
 * hasOwnProperty reference.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Returns `true` if a value is an object, otherwise `false`.
 *
 * @name isObject
 * @api private
 * @param {*} val The value to test.
 * @return {boolean}
 */

// TODO: Move to a library
var isObject = function(val) {
  return Boolean(val) && typeof val === 'object';
};

/**
 * Copies owned, enumerable properties from a source object(s) to a target
 * object when the value of that property on the source object is `undefined`.
 *
 * @name defaults
 * @api public
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object}
 * @example
 * var a = { a: 1 };
 * var b = { a: 2, b: 2 };
 *
 * defaults(a, b);
 * console.log(a); //=> { a: 1, b: 2 }
 */

var defaults = function(target /*, ...sources */) {
  if (!isObject(target)) {
    return target;
  }

  var sources = rest(arguments);

  for (var i = 0; i < sources.length; i += 1) {
    for (var key in sources[i]) {
      if (has.call(sources[i], key) && target[key] === undefined) {
        target[key] = sources[i][key];
      }
    }
  }

  return target;
};

/**
 * Exports.
 */

module.exports = defaults;
