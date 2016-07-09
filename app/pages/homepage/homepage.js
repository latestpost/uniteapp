import {IonicApp, Page, Alert, NavController} from 'ionic-angular';
import {RestService} from '../../services/RestService';
import {SearchbarComponent} from '../../components/searchbar/SearchbarComponent';

@Page({
  templateUrl: 'build/pages/homepage/homepage.html',
  directives: [SearchbarComponent],
  providers: [RestService]
})
export class HomePage {
  static get parameters() {
    return [[NavController],[IonicApp],[RestService]];
  }

  constructor(nav, app, restService) {
    this.nav = nav;
    this.app = app;
    this.restService = restService;
    this.user = app.user;
  }

  initializeItems() {
  }

  doAlert() {
    let alert = Alert.create({
      title: 'Notification Id',
      subTitle: 'RegisterId=' + this.app.main.registerId,
      buttons: ['OK']
    });

    let data = {};
    data.id = this.app.main.registerId;
    console.log(data.id);

    this.restService.register(data)
        .subscribe((json) => {
        });
    this.nav.present(alert);
  }
}
