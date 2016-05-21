import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from './item-details';
import {RestService} from '../../services/RestService';
import {SearchablePage} from '../../shared/SearchablePage';

@Page({
  templateUrl: 'build/pages/rates/list.html',
  providers: [RestService]
})
export class RatesPage extends SearchablePage {
  static get parameters() {
    return [[NavController], [NavParams], [RestService]];
  }

  constructor(nav, navParams, restService) {
    super();

    this.restService = restService;
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.filterField = "name";

    this.rate1 = [
      {
      "category": "NAECI A.8(b)",
      "name": "CATEGORISED WORK (1 – 3) RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 4 th January 2016",
      "years": ["1st", "2nd", "3rd", "4th"],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.44, 8.34, 10.79, 13.01]
      }, {
        "name": "Night",
        "rates": [8.15, 10.55, 13.65, 16.46]
      }, {
        "name": "Afternoons",
        "rates": [7.59, 9.83, 12.72, 15.34]
      }, {
        "name": "Double day - Morning",
        "rates": [7.48, 9.68, 12.53, 15.10]
      }, {
        "name": "Double day - Afternoons",
        "rates": [7.98, 10.33, 13.37, 16.12]
      }, {
        "name": "3 shifts 5 days",
        "rates": [7.88, 10.20, 13.20, 15.91]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [7.98, 10.33, 13.37, 16.12]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [7.73, 10.01, 12.95, 15.61]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.50, 11.01, 14.24, 17.17]
      }, {
        "name": "Overtime A",
        "rates": [9.02, 11.68, 15.11, 18.21]
      }, {
        "name": "Overtime B",
        "rates": [11.59, 15.01, 19.42, 23.42]
      }, ]
    },
    {
      "category": "NAECI A.2(b)",
      "name": "NATIONAL GUARANTEED WORK RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 4 th January 2016",
      "years": [ "1st", "2nd", "3rd", "4th" ],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.41, 8.29, 10.25, 11.98]
      }, {
        "name": "Night",
        "rates": [8.11, 10.49, 12.97, 15.15]
      }, {
        "name": "Afternoons",
        "rates": [7.56, 9.77, 12.08, 14.12, ]
      }, {
        "name": "Double day – Morning",
        "rates": [7.44, 9.62, 11.90, 13.91]
      }, {
        "name": "Double day – Afternoon",
        "rates": [7.94, 10.27, 12.70, 14.84]
      }, {
        "name": "3 shifts 5 days",
        "rates": [7.84, 10.14, 12.54, 14.65]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [7.94, 10.27, 12.70, 14.84]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [7.69, 9.95, 12.30, 14.38]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.46, 10.94, 13.53, 15.81]
      }, {
        "name": "Overtime A",
        "rates": [8.97, 11.61, 14.35, 16.77]
      }, {
        "name": "Overtime B",
        "rates": [11.54, 14.92, 18.45, 21.56]
      }]
    },
    {
      "category": "NAECI A.8(b)",
      "name": "CATEGORISED WORK (1 – 3) RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 9th January 2017",
      "years": ["1st", "2nd", "3rd", "4th"],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.57, 8.51, 11.01, 13.27]
      }, {
        "name": "Night",
        "rates": [8.31, 10.77, 13.93, 16.79]
      }, {
        "name": "Afternoons",
        "rates": [7.75, 10.03, 12.98, 15.65]
      }, {
        "name": "Double day – Morning",
        "rates": [7.63, 9.88, 12.78, 15.41]
      }, {
        "name": "Double day – Afternoons",
        "rates": [8.14, 10.54, 13.64, 16.44]
      }, {
        "name": "3 shifts 5 days",
        "rates": [8.04, 10.41, 13.47, 16.23]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [8.14, 10.54, 13.64, 16.44]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [7.88, 10.21, 13.21, 15.92]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.67, 11.23, 14.53, 17.52]
      }, {
        "name": "Overtime A",
        "rates": [9.20, 11.91, 15.41, 18.58]
      }, {
        "name": "Overtime B",
        "rates": [11.83, 15.32, 19.82, 23.89]
      }]
    },
    {
      "category": "NAECI A.2(b)",
      "name": "NATIONAL GUARANTEED WORK RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 9th January 2017",
      "years": ["1st", "2nd", "3rd", "4th"],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.54, 8.46, 10.46, 12.22]
      }, {
        "name": "Night",
        "rates": [8.27, 10.70, 13.23, 15.46]
      }, {
        "name": "Afternoons",
        "rates": [7.71, 9.97, 12.33, 14.41]
      }, {
        "name": "Double day – Morning",
        "rates": [7.59, 9.82, 12.14, 14.19]
      }, {
        "name": "Double day – Afternoons",
        "rates": [8.10, 10.48, 12.96, 15.14]
      }, {
        "name": "3 shifts 5 days",
        "rates": [8.00, 10.35, 12.79, 14.95]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [8.10, 10.48, 12.96, 15.14]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [7.85, 10.15, 12.55, 14.66]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.63, 11.17, 13.81, 16.13]
      }, {
        "name": "Overtime A",
        "rates": [9.16, 11.84, 14.64, 17.11]
      }, {
        "name": "Overtime B",
        "rates": [11.77, 15.23, 18.83, 22.00]
      }]
    },
    {
      "category": "NAECI A.8(b)",
      "name": "CATEGORISED WORK (1 – 3) RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 8th January 2018",
      "years": ["1st", "2nd", "3rd", "4th"],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.73, 8.72, 11.29, 13.60]
      }, {
        "name": "Night",
        "rates": [8.51, 11.03, 14.28, 17.20]
      }, {
        "name": "Afternoons",
        "rates": [7.93, 10.28, 13.31, 16.03]
      }, {
        "name": "Double day – Morning",
        "rates": [7.81, 10.12, 13.11, 15.79]
      }, {
        "name": "Double day – Afternoons",
        "rates": [8.34, 10.80, 13.99, 16.85]
      }, {
        "name": "3 shifts 5 days",
        "rates": [8.23, 10.66, 13.81, 16.63]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [8.34, 10.80, 13.99, 16.85]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [8.08, 10.46, 13.55, 16.32]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.88, 11.51, 14.90, 17.95]
      }, {
        "name": "Overtime A",
        "rates": [9.42, 12.21, 15.81, 19.04]
      }, {
        "name": "Overtime B",
        "rates": [12.11, 15.70, 20.32, 24.48]
      }]
    },
    {
      "category": "NAECI A.2(b)",
      "name": "NATIONAL GUARANTEED WORK RATES FOR EMPLOYED APPRENTICES",
      "date": "From Monday 8th January 2018",
      "years": ["1st", "2nd", "3rd", "4th"],
      "items": [{
        "name": "Basic Pay",
        "rates": [6.70, 8.67, 10.72, 12.53]
      }, {
        "name": "Night",
        "rates": [8.48, 10.97, 13.56, 15.85]
      }, {
        "name": "Afternoons",
        "rates": [7.90, 10.22, 12.64, 14.77]
      }, {
        "name": "Double day – Morning",
        "rates": [7.78, 10.07, 12.45, 14.55]
      }, {
        "name": "Double day – Afternoons",
        "rates": [8.30, 10.74, 13.28, 15.52]
      }, {
        "name": "3 shifts 5 days",
        "rates": [8.20, 10.60, 13.11, 15.32]
      }, {
        "name": "3 Shifts 7 days",
        "rates": [8.30, 10.74, 13.28, 15.52]
      }, {
        "name": "Rolling Shifts Days",
        "rates": [8.04, 10.40, 12.86, 15.04]
      }, {
        "name": "Rolling Shifts Nights",
        "rates": [8.84, 11.44, 14.15, 16.54]
      }, {
        "name": "Overtime A",
        "rates": [9.38, 12.14, 15.01, 17.54]
      }, {
        "name": "Overtime B",
        "rates": [12.06, 15.61, 19.30, 22.55]
      }, ]
    }
]

  this.rate2 =
  [
    {
    "date": "From Monday 4th January 2016",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
        "name": "Cats 1-3 Basic Hourly Rate",
        "rates": [11.89, 13.49, 15.96, 16.64, 17.33]
      }, {
        "name": "Annualised Base Salary (38hrs x 52 wks)",
        "rates": [23494.64, 26656.24, 31536.96, 32880.64, 34244.08]
      }
    ]
  },
  {
    "date": "From Monday 9th January 2017",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
      "name": "Cats 1-3 Basic Hourly Rate",
      "rates": [12.13, 13.76, 16.28, 16.97, 17.68]
    }, {
      "name": "Annualised Base Salary (38hrs x 52 wks)",
      "rates": [23968.88, 27189.76, 32169.28, 33532.72, 34935.68]
    }]
  },
  {
    "date": "From Monday 8th January 2018",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
        "name": "Cats 1-3 Basic Hourly Rate",
        "rates": [12.43, 14.10, 16.69, 17.39, 18.12]
      }, {
        "name": "Annualised Base Salary (38hrs x 52 wks)",
        "rates": [24561.68, 27861.60, 32979.44, 34362.64, 35805.12]
      }
    ]
  },
  {
    "date": "From Monday 4th January 2016",
    "name": "National Guaranteed Rates",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
        "name": "NGR Basic Hourly Rate",
        "rates": [10.64, 12.05, 14.12, 14.82, 15.51]
      }, {
        "name": "Annualised Base Salary (38hrs x 52 wks)",
        "rates": [21024.64, 23810.80, 27901.12, 29284.32, 30647.76]
      }
    ]
  },
  {
    "date": "From Monday 9th January 2017",
    "name": "National Guaranteed Rates",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
        "name": "NGR Basic Hourly Rate",
        "rates": [10.85, 12.29, 14.40, 15.12, 15.82]
      }, {
        "name": "Annualised Base Salary (38hrs x 52 wks)",
        "rates": [21439.60, 24285.04, 28454.40, 29877.12, 31260.32]
      }
    ]
  },
  {
    "date": "From Monday 8th January 2018",
    "name": "National Guaranteed Rates",
    "grades": ["2", "3", "4", "5", "6"],
    "items": [{
        "name": "NGR Basic Hourly Rate",
        "rates": [11.12, 12.60, 14.76, 15.50, 16.22]
      }, {
        "name": "Annualised Base Salary (38hrs x 52 wks)",
        "rates": [21973.12, 24897.60, 29165.76, 30628.00, 32050.72]
      }
    ]
  }
]

this.rate3 = [
  {
    "age": 40,
    "grade": 1,
    "rate": 5.66,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 40,
    "grade": 2,
    "rate": 6.62,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 40,
    "grade": 3,
    "rate": 7.55,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 40,
    "grade": 4,
    "rate": 8.99,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 40,
    "grade": 5,
    "rate": 9.21,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 40,
    "grade": 6,
    "rate": 9.21,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  },
  {
    "age": 41,
    "grade": 1,
    "rate": 8.49,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 41,
    "grade": 2,
    "rate": 9.93,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 41,
    "grade": 3,
    "rate": 11.33,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 41,
    "grade": 4,
    "rate": 13.49,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 41,
    "grade": 5,
    "rate": 13.82,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }, {
    "age": 41,
    "grade": 6,
    "rate": 13.82,
    "description": "From 6/04/16 Weekly rate of accrual (up to 103 weeks)",
    "group": "A.7 (c) Contractual severance payment (NAECI 16.5(a))"
  }
]

  }

  ngOnInit() {
    this.initializeItems()
  }

  initializeItems() {
    this.items1 = this.filteredItems1 = this.rate1;
    this.items2 = this.filteredItems2 = this.rate2;
    this.items3 = this.filteredItems3 = this.rate3;
  }

  itemTapped(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}
