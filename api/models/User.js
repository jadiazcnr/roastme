/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {
    // e.g., "Polly"
    name: {
      type: 'string',
      required: true
    },

    // e.g., 3.26
    username: {
      type: 'string',
      required: true
    },

    // e.g., "cm"
    password: {
      type: 'string',
      required: true
    },

    // e.g., [{...}, {...}, ...]
    email: {
      type: 'string',
      required: true
    },

    creationDate: {
      type: 'date',
      required: true,
      defaultsTo: Date()
    }
  },

  beforeCreate: function(values, next) {

    // This checks to make sure the password and password confirmation match before creating record
    if (!values.password || values.password != values.confirmation) {
      return next({
        err: ["Password doesn't match password confirmation."]
      });
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(
      err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      // values.online= true;
      next();
    });
  }
};
