/**
 * Roast.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {
    userId: {
      type: 'string',
      required: true
    },

    title: {
      type: 'string',
      required: true
    },

    imageUrl: {
      type: 'string',
      required: true
    },

    creationDate: {
      type: 'date',
      required: true,
      defaultsTo: Date()
    }
  }
};
