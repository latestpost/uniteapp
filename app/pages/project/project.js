import {Page,IonicApp} from 'ionic-angular';
import {RestService} from '../../services/RestService';
import {FormBuilder, Validators} from 'angular2/common';
import {Storage, LocalStorage} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/project/project.html',
  providers: [RestService]
})
export class ProjectPage {
  static get parameters(){ return [[IonicApp],[RestService], [FormBuilder]]; }

  constructor(app, restService, formBuilder, validators) {
        this.app = app;
        this.restService = restService;
        this.projectForm = formBuilder.group({ // name should match [ngFormModel] in your html
            title: ["Title", Validators.required], // Setting fields as required
            description: ["LALALALA", Validators.required],
            startDate: ["12/10/2016", Validators.required],
            skillsetsneeded: []
        });

        this.skills = [];
  }

  ngOnInit() {
    this.initializeItems()
  }

  initializeItems() {
    const dummyData = [
      { "name": "Labourer",     "checked": false },
      { "name": "Stonemason",   "checked": false },
      { "name": "Carpenter",    "checked": false },
      { "name": "Electrician",  "checked": false }
    ]
    //this.restService.findSkills().subscribe((data) => {
      this.skills = dummyData;
    //});
  }

  addProject(event) {
    event.preventDefault();

    const project = this.projectForm.value;
    project.skillsetsneeded = this.skills.filter((item) => {
      return item.checked;
    })

    this.restService.addProject(project)
        .subscribe((json) => {
          console.log(json)
        });
  }
}
