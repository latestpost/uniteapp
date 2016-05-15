/**
 * AuthController
 *
 * @description :: Server-side logic for managing notifications
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var gcm = require('node-gcm');
 var app = express();
 var gcmApiKey = 'AIzaSyB1RqR0MrCSRCaYomdfmXEl8ado0en1fe8'; // GCM API KEY OF YOUR GOOGLE CONSOLE PROJECT

module.exports = {
  index: function (req, res) {
  }
  register: function (req, res) {
    console.log(req.query);
    console.log('Register = ' + req.query.registerId);
  },
  push: function (req, res) {
    var device_tokens = []; //create array for storing device tokens

    var retry_times = 4; //the number of times to retry sending the message if it fails
    var sender = new gcm.Sender(gcmApiKey); //create a new sender
    var message = new gcm.Message(); //create a new message
    message.addData('title', req.query.title);
    message.addData('message', req.query.message);
    message.addData('sound', 'default');
    message.collapseKey = 'Testing Push'; //grouping messages
    message.delayWhileIdle = true; //delay sending while receiving device is offline
    message.timeToLive = 3; //number of seconds to keep the message on
    //server if the device is offline

    //Take the registration id(lengthy string) that you logged
    //in your ionic v2 app and update device_tokens[0] with it for testing.
    //Later save device tokens to db and
    //get back all tokens and push to multiple devices
    //**TODO store all tokens

    device_tokens[0] = "d-eBT04BIXs:APA91bGcILn-vS4BBPzv43W_Sd_p9FTb4qD5JvCta8VB7LXWjfxpiDR-6Uucsbyte9Zhy-mM24wdqFffJRGW_iDmB8yeficWtwPwj68ugwqTYoIyOklhQAOrP1-IgGh8ipo-irB_lT33";
    sender.send(message, device_tokens[0], retry_times, function (result) {
        console.log('push sent to: ' + device_tokens);
        res.status(200).send('Pushed notification ' + device_tokens);
    }, function (err) {
        res.status(500).send('failed to push notification ');
    });

  }
}
