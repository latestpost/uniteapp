/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
    var email = req.param('email');
    var password = req.param('password');
    var notificationId = req.param('notificationId');

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'});
    }

    User.findOne({email: email}, function (err, user) {
      if (!user) {
        return res.json(401, {err: 'invalid email or password'});
      }

      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {err: 'invalid email or password'});
        } else {

          //** TODO attach notificationId to user model

          res.json({
            user: user,
            token: jwToken.issue({id : user.id })
          });
        }
      });
    })
  }
};
