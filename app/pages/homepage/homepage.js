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

  constructor(nav,app,restService) {
    this.nav = nav;
    this.app = app;
    this.restService = restService;
  }

  initializeItems() {
  }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'RegisterId=' + this.app.main.registerId,
      buttons: ['OK']
    });

    this.restService.register(this.app.main.registerId)
        .subscribe((json) => {
        });

    this.nav.present(alert);
  }
}
