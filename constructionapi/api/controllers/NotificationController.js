/**
 * NotificationController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
  },

  register: function (req, res) {
    var id = req.param('id');
    var token = req.param('token');
    console.log('Register = ' + id);
    //**TODO store all tokens against user names
    res.json(200, {message: id + ' registered'});
  },

  push: function (req, res) {
    message = {};
    message.token =
     [req.query.token];
    message.title = req.query.title;
    message.body = req.query.body;

    console.log(message);
    PusherService.pushAndroid(message);
    PusherService.pushIos(message);

    return res.json(200, message);

  }
}
