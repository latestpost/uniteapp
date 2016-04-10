import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from './item-details';
import {RestService} from '../../services/RestService';

@Page({
  templateUrl: 'build/pages/jobs/list.html',
  providers: [RestService]
})
export class JobsPage {
  static get parameters() {
    return [[NavController], [NavParams], [RestService]];
  }

  constructor(nav, navParams, restService) {
    this.restService = restService;
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Job ' + i,
        description: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
        this.restService.findAll().subscribe(
            data => this.jobs = data
        );
    }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
