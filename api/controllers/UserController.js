/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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

	detail: function(req, res) {
		User.findOne({
			id: req.param('id')
		}, function foundUser(err, user) {
			if (err) {
				return res.negotiate(err);
			}
			if (!user) {
				return res.notFound('Could not find User, sorry.');
			}

			sails.log('Found "%s"', user.name);
			return res.view({
				user: user
			});
		});
	},

	create: function(req, res) {
		User.create(req.params.all(), function userCreated(err, user) {
			if (err) {
				return res.negotiate(err);
				return res.redirect('/user/new');
			}
			res.redirect('/user/index');
		});
	}

};
