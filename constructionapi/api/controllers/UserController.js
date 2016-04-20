/**
 * JobController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
			res.json({
            token: jwToken.issue({id : 100 })
          });
	  },
};
