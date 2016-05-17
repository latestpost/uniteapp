
var GCM = require('gcm').GCM;

var apiKey = 'AIzaSyB1RqR0MrCSRCaYomdfmXEl8ado0en1fe8';
var gcm = new GCM(apiKey);

var message = {
    registration_id: 'ddjMj9oUSMc:APA91bGl7qBxzhKM5mNMEMgJu9RovRY4lEZIWKBR7ZMbJ9xLwNWlSDhI0bZYeIw5JDijFn0TOkMOkHmCxfVdQTzfk7TH4m45-Im3VNfZPIYqHEUbRR8Q_2HUSDeridih8QDjXjpAFEKE', // required
    collapse_key: 'Collapse key',
    'data.title': 'title',
    'data.body': 'body'
};

gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
    }
});
