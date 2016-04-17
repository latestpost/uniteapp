import {Page,IonicApp} from 'ionic-angular';
import {RestService} from '../../services/RestService';

@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [RestService]
})
export class LoginPage {
  static get parameters(){ return [[IonicApp],[RestService]]; }

  constructor(app, restService) {
    this.app = app;
    this.restService = restService;
  }

  login(){
    let credentials = {};
    credentials.email = 'test@test.com';
    credentials.password = 'testpassword';
    this.restService.login(credentials).subscribe(
        data => this.contacts = data
    );
    this.app.main.setLoggedin();

  }
}
