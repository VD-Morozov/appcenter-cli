/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * failure response object
 *
 */
class V2FailureResponse {
  /**
   * Create a V2FailureResponse.
   * @member {string} code
   * @member {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2FailureResponse
   *
   * @returns {object} metadata of V2FailureResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2FailureResponse',
      type: {
        name: 'Composite',
        className: 'V2FailureResponse',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = V2FailureResponse;