/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // seed the database with Locations
        var users = {
            email: 'test@test.com',
            encryptedPassword: 'testpassword'
        };
        User.create(users, function Obj(err, locations) {
            if (err) {
                cb(err);
            }
            console.log('users created: ', users);
        });

        // seed the database with Jobs
              var job = {
                  title: 'A Job',
                  description: 'Some job description.'
              };
              Job.create(job, function Obj(err, locations) {
                  if (err) {
                      cb(err);
                  }
                  console.log('jobs created: ', job);
              });
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
