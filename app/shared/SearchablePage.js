import {TimerWrapper} from 'angular2/src/facade/async';

/**
  *
  */
export class SearchablePage {
  constructor() {
    this.items = [];
    this.filteredItems = [];
    this.searchQuery = "";
    this.filterField = "";
  }

  filterItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      this.filteredItems =  this.items;
      return;
    }

    this.filteredItems = this.items.filter((v) => {
      if (v[this.filterField].toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}
