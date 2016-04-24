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

  // seed the database with Users
        var users = {
            email: 'test@test.com',
            encryptedPassword: 'test',
            password: 'test'
        };
        User.create(users, function Obj(err, o) {
            if (err) {
                console.log(err);
            }
            console.log('users created: ', users);
        });

        // seed the database with Contacts
              var contact = {
                  name: 'Fred Smith',
                  title: 'Sir'
              };
              Contact.create(contact, function Obj(err, o) {
                  if (err) {
                      console.log(err);
                  }
                  console.log('contacts created: ', contact);
              });

        // seed the database with Projects
              var project = {
                  title: 'Tower Construction Project',
                  description: 'A great new construction project.',
                  startDate: '12/05/2016',
                  owner: 'Knight Frank'
              };
              Project.create(project, function Obj(err, o) {
                  if (err) {
                      console.log(err);
                  }
                  console.log('projects created: ', project);
              });

              var project = {
                  title: 'Holiday Campus Construction',
                  description: 'A great new construction project.',
                  startDate: '12/05/2018',
                  owner: 'Fred Builder Corporation'
              };
              Project.create(project, function Obj(err, o) {
                  if (err) {
                      console.log(err);
                  }
                  console.log('projects created: ', project);
              });

              // seed the database with Jobs
                    var job = {
                        title: 'A Job',
                        description: 'Some job description ob description ob description ob description ob description ob description.',
                    };
                    Job.create(job, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('jobs created: ', job);
                    });

                    var job = {
                        title: 'A Job',
                        description: 'Some job description ob description ob description ob description ob description ob description.',
                    };
                    Job.create(job, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('jobs created: ', job);
                    });

                    var skillset1 = {
                        name: 'Labourer'
                    };
                    var skillset2 = {
                        name: 'Carpenter'
                    };
                    var skillset3 = {
                        name: 'Foreman'
                    };

                    Skill.create(skillset1, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skill created: ', skillset1);
                    });

                    Skill.create(skillset2, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skill created: ', skillset2);
                    });

                    Skill.create(skillset3, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skill created: ', skillset3);
                    });


                    var skillset1 = {
                        name: 'Labourer',
                        owner: 1
                    };
                    var skillset2 = {
                        name: 'Carpenter',
                        owner: 1
                    };
                    var skillset3 = {
                        name: 'Foreman',
                        owner: 1
                    };

                    ProjectSkill.create(skillset1, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skillset required created: ', skillset1);
                    });

                    ProjectSkill.create(skillset2, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skillset required created: ', skillset2);
                    });

                    ProjectSkill.create(skillset3, function Obj(err, o) {
                        if (err) {
                            console.log(err);
                        }
                        console.log('skillset required created: ', skillset3);
                    });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
