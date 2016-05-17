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
    message.tokens = ['d-eBT04BIXs:APA91bGcILn-vS4BBPzv43W_Sd_p9FTb4qD5JvCta8VB7LXWjfxpiDR-6Uucsbyte9Zhy-mM24wdqFffJRGW_iDmB8yeficWtwPwj68ugwqTYoIyOklhQAOrP1-IgGh8ipo-irB_lT33'];
    message.title = 'Test title';
    message.body = 'Test message body';
    PusherService.pushAndroid(message);
    PusherService.pushIos(message);

    Message.create(message, function Obj(err, o) {
        if (err) {
            console.log(err);
        }
    });

  }
}
