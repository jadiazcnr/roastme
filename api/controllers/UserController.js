/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: function (req, res) {
		varUser.findByEmail("jadiaz@paradigmadigital.com");
    return res.send("Hi there! ");
  },

	index: function(req, res, next) {

	    // Get an array of all users in the User collection(e.g. table)
	    User.find(function foundUsers(err, users) {
	      if (err) return next(err);
	      // pass the array down to the /views/index.ejs page
	      res.view({
	        users: users
	      });
	    });
	  },

};
