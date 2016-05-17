// api/services/PusherService.js
//https://github.com/ghaiklor/sails-service-pusher

var Pusher = require("sails-service-pusher");

var android = Pusher('android', {
  device: [], // Array of string with device tokens
  provider: {
    apiKey: 'AIzaSyB1RqR0MrCSRCaYomdfmXEl8ado0en1fe8', // Your Google Server API Key
    maxSockets: 12, // Max number of sockets to have open at one time
    proxy: 'http://your-proxy.com' // This is [just like passing a proxy on to request](https://github.com/request/request#proxies)
  },
  notification: {
    title: 'Android Test Push', // Indicates notification title
    body: 'Hey, there!', // Indicates notification body text
    icon: '', // Indicates notification icon
    sound: '', // Indicates sound to be played
    badge: '', // Indicates the badge on client app home icon
    payload: {} // Custom data to send within Push Notification
  }
});

//**TODO drop pem into folder
var ios = Pusher('ios', {
  device: [], // Array of string with device tokens
  provider: {
    cert: 'cert.pem', // The filename of the connection certificate to load from disk
    key: 'key.pem', // The filename of the connection key to load from disk
    ca: [], // An array of trusted certificates
    pfx: '', // File path for private key, certificate and CA certs in PFX or PKCS12 format
    passphrase: '', // The passphrase for the connection key
    production: false, // Specifies which environment to connect to: Production (if true) or Sandbox
    voip: false, // Enable when you are using a VoIP certificate to enable paylods up to 4096 bytes
    port: 2195, // Gateway port
    rejectUnauthorized: true, // Reject Unauthorized property to be passed through to tls.connect()
    cacheLength: 1000, // Number of notifications to cache for error purposes
    autoAdjustCache: true, // Whether the cache should grow in response to messages being lost after errors
    maxConnections: 1, // The maximum number of connections to create for sending messages
    connectTimeout: 10000, // The duration of time the module should wait, in milliseconds
    connectionTimeout: 3600000, // The duration the socket should stay alive with no activity in milliseconds
    connectionRetryLimit: 10, // The maximum number of connection failures that will be tolerated before apn will "terminate"
    buffersNotifications: true, // Whether to buffer notifications and resend them after failure
    fastMode: false // Whether to aggresively empty the notification buffer while connected
  },
  notification: {
    title: 'iOS Test Push', // Indicates notification title
    body: 'Hey, there!', // Indicates notification body text
    icon: '', // Indicates notification icon
    sound: '', // Indicates sound to be played
    badge: '', // Indicates the badge on client app home icon
    payload: {} // Custom data to send within Push Notification
  }
});

module.exports = {
    pushAndroid: function(options) {
      android
        .send(options.tokens, {
          title: options.title,
          body: options.body
        })
        .then(console.log.bind(console))
        .catch(console.error.bind(console));
    },
    pushIos: function(options) {
      ios
      .send(options.tokens, {
        title: options.title,
        body: options.body
      })
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
    }
};
