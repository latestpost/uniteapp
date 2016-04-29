import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from './item-details';
import {RestService} from '../../services/RestService';

@Page({
  templateUrl: 'build/pages/contacts/list.html',
  providers: [RestService]
})
export class ContactsPage {
  static get parameters() {
    return [[NavController], [NavParams], [RestService]];
  }

  constructor(nav, navParams, restService) {
    this.restService = restService;
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ngOnInit() {
        this.restService.findContacts().subscribe(
            data => this.contacts = data
        );
    }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
