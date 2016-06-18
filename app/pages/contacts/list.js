import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from './item-details';
import {RestService} from '../../services/RestService';
import {SearchablePage} from '../../shared/SearchablePage';

@Page({
  templateUrl: 'build/pages/contacts/list.html',
  providers: [RestService]
})
export class ContactsPage extends SearchablePage {
  static get parameters() {
    return [[NavController], [NavParams], [RestService]];
  }

  constructor(nav, navParams, restService) {
    super();

    this.restService = restService;
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.filterField = "lastname";
  }

  ngOnInit() {
        this.restService.findUsers().subscribe(
            data => this.items = this.filteredItems = data
        );
    }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
