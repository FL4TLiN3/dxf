const config = require('../config');

const info = function() {
//  if (config.verbose) {
//    console.info.apply(undefined, arguments);
//  }
}

const warn = function() {
//  if (config.verbose) {
//    console.warn.apply(undefined, arguments);
//  }
}

const error = function() {
//  console.error.apply(undefined, arguments);
}

module.exports.config = config;
module.exports.info = info;
module.exports.warn = warn;
module.exports.error = error;
