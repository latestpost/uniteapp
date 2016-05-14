import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {SearchablePage} from '../../shared/SearchablePage';


@Page({
  templateUrl: 'build/pages/training/list.html'
})
export class TrainingPage extends SearchablePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    super();

    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.filterField = "title";
  }

  ngOnInit() {
    this.initializeItems();
  }

  initializeItems() {
    for(let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Training item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.filteredItems = this.items;
  }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
