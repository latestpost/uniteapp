import {Page, Alert, NavController} from 'ionic-angular';
import {SearchbarComponent} from '../../components/searchbar/SearchbarComponent';

@Page({
  templateUrl: 'build/pages/homepage/homepage.html',
  directives: [SearchbarComponent]
})
export class HomePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  initializeItems() {
    this.items = [
      "Amsterdam",
      "London"
    ];
  }

  doAlert() {
    let alert = Alert.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });

    this.nav.present(alert);
  }
}
