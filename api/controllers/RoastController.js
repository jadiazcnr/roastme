/**
 * RoastController
 *
 * @description :: Server-side logic for managing roasts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res, next) {
		Roast.find({
			userId: req.param('userId')
		}, function foundRoster(err, roasts) {
			if (err) {
				return res.negotiate(err);
			}
			if (!roasts) {
				return res.notFound('Could not find roasters, sorry.');
			}

			sails.log('Found "%s"', roasts);
			return res.view({
				roasts: roasts
			});
		});
	}
}
