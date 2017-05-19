/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NotificationConfigWindowsResult class.
 * @constructor
 * WNS notification configuration result.
 *
 * @member {string} packageSid Package security identifier (SID).
 * 
 */
function NotificationConfigWindowsResult() {
  NotificationConfigWindowsResult['super_'].call(this);
}

util.inherits(NotificationConfigWindowsResult, models['NotificationConfigResult']);

/**
 * Defines the metadata of NotificationConfigWindowsResult
 *
 * @returns {object} metadata of NotificationConfigWindowsResult
 *
 */
NotificationConfigWindowsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'wns_config',
    type: {
      name: 'Composite',
      className: 'NotificationConfigWindowsResult',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        packageSid: {
          required: true,
          serializedName: 'package_sid',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationConfigWindowsResult;