import {Page,IonicApp} from 'ionic-angular';
import {RestService} from '../../services/RestService';
import {FormBuilder, Validators} from 'angular2/common';
import {Storage, LocalStorage} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [RestService]
})
export class LoginPage {
  static get parameters(){ return [[IonicApp],[RestService], [FormBuilder]]; }

  constructor(app, restService, formBuilder, validators) {
    this.app = app;
    this.restService = restService;
    this.localStorage = new Storage(LocalStorage);
    this.loginForm = formBuilder.group({ // name should match [ngFormModel] in your html
      username: ["", Validators.required], // Setting fields as required
      password: ["", Validators.required]
  });
  }

  login(){
    console.log(this.loginForm.value)
    let credentials = {};
    credentials.email = this.loginForm.value.username;
    credentials.password = this.loginForm.value.password;
    this.restService.login(credentials)
      .subscribe((json) => {
          let token = json.token;
          this.localStorage.set('id_token', token);
          this.app.main.setLoggedin();
      });
  }
}
