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
            email: ["", Validators.required], // Setting fields as required
            password: ["", Validators.required]
        });
  }

  login() {
      let credentials = {};
      credentials.email = this.loginForm.value.email;
      credentials.password = this.loginForm.value.password;
      this.restService.login(credentials)
          .subscribe((json) => {
              // store jwt token
              let token = json.token;
              this.localStorage.set('id_token', token);
              // set logged in status
              this.app.main.setLoggedin();
          });
  }
}
