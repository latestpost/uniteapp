import {Page,IonicApp} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  static get parameters(){ return [IonicApp]; }

  constructor(app) {
    this.app = app;
  }

  login(){
    this.app.main.setLoggedin();
  }
}
