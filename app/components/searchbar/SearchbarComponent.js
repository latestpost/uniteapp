import {EventEmitter, Directive, Component} from "angular2/core";
import {Searchbar, List, Item} from "ionic-angular";

@Component({
  selector: ['searchbar', '[searchbar]', '.searchbar'],
  templateUrl: 'build/components/searchbar/searchbar.html',
  directives: [Searchbar, List, Item]
})
export class SearchbarComponent {
  constructor() {
    this.searchQuery = '';
    this.initializeItems();

    console.log("Initialised");
  }

  initializeItems() {
    this.items = [
      "London",
      "Madrid"
    ];
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
