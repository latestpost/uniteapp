var express = require('express');
var gcm = require('node-gcm');
var app = express();
var gcmApiKey = 'AIzaSyB1RqR0MrCSRCaYomdfmXEl8ado0en1fe8'; // GCM API KEY OF YOUR GOOGLE CONSOLE PROJECT

var server = app.listen(3000, function () {
    console.log('server is just fine!');
});

app.get('/', function (req, res) {
    res.send("This is basic route");
});

app.get('/push', function (req, res) {
    var device_tokens = []; //create array for storing device tokens

    var retry_times = 4; //the number of times to retry sending the message if it fails
    var sender = new gcm.Sender(gcmApiKey); //create a new sender
    var message = new gcm.Message(); //create a new message
    message.addData('title', 'PushTitle');
    message.addData('message', "Push message");
    message.addData('sound', 'default');
    message.collapseKey = 'Testing Push'; //grouping messages
    message.delayWhileIdle = true; //delay sending while receiving device is offline
    message.timeToLive = 3; //number of seconds to keep the message on
    //server if the device is offline

    //Take the registration id(lengthy string) that you logged
    //in your ionic v2 app and update device_tokens[0] with it for testing.
    //Later save device tokens to db and
    //get back all tokens and push to multiple devices
    device_tokens[0] = "ePM1hoCN6K8:APA91bGYgolLJKogDdBPlh2DQev2hBu_7aRS-VnBBjwXvjGszXmJkql-rAIAmYwlFk3xDa_Mf4GcuLQDPhtS_per4O1RMSTlrBvmLD7OFXOU8O9Ch1FuvqYF4gbUna0_-ZmwcPkkhFii";
    sender.send(message, device_tokens[0], retry_times, function (result) {
        console.log('push sent to: ' + device_tokens);
        res.status(200).send('Pushed notification ' + device_tokens);
    }, function (err) {
        res.status(500).send('failed to push notification ');
    });
});
