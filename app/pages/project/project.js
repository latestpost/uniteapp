import {Page, IonicApp} from 'ionic-angular';
import {RestService} from '../../services/RestService';
import {FormBuilder, Validators} from 'angular2/common';
import {Storage, LocalStorage} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/project/project.html',
  providers: [RestService]
})
export class ProjectPage {
  static get parameters() {
    return [
      [IonicApp],
      [RestService],
      [FormBuilder]
    ];
  }

  constructor(app, restService, formBuilder, validators) {
    this.app = app;
    this.restService = restService;

    this.projectForm = formBuilder.group({
      title: ['', Validators.minLength(2)],
      description: ['', Validators.minLength(2)],
      startDate: this._getTodaysDate(),
      skillsetsneeded: []
    });

    this.skills = [];
  }

  ngOnInit() {
    this.skills = [{
      "name": "Labourer",
      "checked": false
    }, {
      "name": "Carpenter",
      "checked": false
    }, {
      "name": "Foreman",
      "checked": false
    }, {
      "name": "Electrician",
      "checked": false
    }]
  }


  addProject(event) {
    event.preventDefault();
    const project = this.projectForm.value;
    // Only add checked skills to project
    project.skillsetsneeded = this.skills.filter((item) => {
      return item.checked;
    })
    // Send new project
    this.restService.addProject(project)
      .subscribe((json) => {
        console.log(json)
      });
  }


  /*
    getTodaysDate();
    Set the time of a project to start from todays date
  */
  _getTodaysDate() {
    var today = new Date();
    var days = today.getDate();
    var month = today.getMonth() + 1; //January is 0!
    var year = today.getFullYear();
    if (days < 10) days = '0' + days
    if (month < 10) month = '0' + month
    today = year + '-' + month + '-' + days;
    return today;
  }


}
