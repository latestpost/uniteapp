import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from './item-details';
import {SearchablePage} from '../../shared/SearchablePage';
import {RestService} from '../../services/RestService';

@Page({
  templateUrl: 'build/pages/messages/list.html',
  providers: [RestService]
})
export class MessagesPage extends SearchablePage {
  static get parameters() {
    return [[NavController], [NavParams], [RestService]];
  }

  constructor(nav, navParams, restService) {
    super();

    this.nav = nav;
      this.restService = restService;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.filterField = "title";
  }

  ngOnInit() {
    this.initializeItems()
  }

  initializeItems() {
    this.restService.findMessages().subscribe(
        data => this.items = this.filteredItems = data
    );
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
