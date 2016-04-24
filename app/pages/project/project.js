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
            title: ["", Validators.required], // Setting fields as required
            description: ["", Validators.required],
            startDate: ["", Validators.required]
        });
  }
  addProject() {
      console.log (this.projectForm.value);
      /*
      this.restService.addProject(project)
          .subscribe((json) => {
          });
      */
  }
}
