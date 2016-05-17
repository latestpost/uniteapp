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
    console.log('Register = ' + id);
    //**TODO store all tokens against user names
    res.json(200, {message: id + ' registered'});
  },

  push: function (req, res) {
    message = {};
    message.tokens =
     ['ddjMj9oUSMc:APA91bGl7qBxzhKM5mNMEMgJu9RovRY4lEZIWKBR7ZMbJ9xLwNWlSDhI0bZYeIw5JDijFn0TOkMOkHmCxfVdQTzfk7TH4m45-Im3VNfZPIYqHEUbRR8Q_2HUSDeridih8QDjXjpAFEKE'];
    message.title = req.query.title;
    message.body = req.query.body;
    PusherService.pushAndroid(message);
    PusherService.pushIos(message);

    res.status(200).send('Pushed notification');

  }
}
