import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';


@Page({
  templateUrl: 'build/pages/contacts/list.html'
})
export class ContactsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for(let i = 1; i < 25; i++) {
      this.items.push({
        name: 'Fred Smith',
        title: 'Contact ' + i,
        note: 'This is item #' + i,
        icon: 'person'
      });
    }
  }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
