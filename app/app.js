import 'es6-shim';

import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from 'angular2/http'
import {provide} from 'angular2/core';

import {App, IonicApp, Platform, MenuController, Alert} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {AgreementsPage} from './pages/agreements/list';
import {ContactsPage} from './pages/contacts/list';
import {HomePage} from './pages/homepage/homepage';
import {JobNotificationsPage} from './pages/jobnotifications/list';
import {JobsPage} from './pages/jobs/list';
import {LoginPage} from './pages/login/login';
import {NewsPage} from './pages/news/list';
import {ProjectPage} from './pages/project/project';
import {RatesPage} from './pages/rates/list';
import {TrainingPage} from './pages/training/list';
import {Push} from 'ionic-native';


let UNAUTHORIZED_PAGES = [
    { path: '/login', icon: 'login', title: 'Login', component: LoginPage }
];

let AUTHORIZED_PAGES = [
    { path: '/home', icon: 'home', title: 'Home', component: HomePage },
    { path: '/contact', icon: 'contact', title: 'Reps Contact List', component: ContactsPage },
    { path: '/document', icon: 'document', title: 'Construction Agreements', component: AgreementsPage },
    { path: '/wifi', icon: 'wifi', title: 'Wage Rates', component: RatesPage },
    { path: '/basket', icon: 'basket', title: 'News Feed', component: NewsPage },
    { path: '/calendar', icon: 'calendar', title: 'Training', component: TrainingPage },
    { path: '/people', icon: 'people', title: 'Search Jobs', component: JobsPage },
    { path: '/jobs', icon: 'wifi', title: 'Job Notifications', component: JobNotificationsPage },
    { path: '/project', icon: 'project', title: 'Add Project', component: ProjectPage } // TODO: Needs Icon
];

// function ToRoutes(pagesArray) {
//     return pagesArray.map(function(pageObj) {
//         return new Route({ path: pageObj.path, component: pageObj.component, name: pageObj.title, useAsDefault: false });
//     });
// }

@App({
    templateUrl: 'build/app.html',
    providers: [
        provide(AuthHttp, {
            useFactory: (http) => {
                return new AuthHttp(new AuthConfig(), http);
            },
            deps: [Http]
        }),
    ],
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.app.main = this;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();
    this.loggedIn = true;

    // set our app's pages
    this.app.pages = UNAUTHORIZED_PAGES;

    this.rootPage = LoginPage;
    if (this.loggedIn){
      this.rootPage = JobNotificationsPage;
      this.setLoggedin();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      var push = Push.init({
        android: {
          senderID: "1036416855963"
        },
        ios: {
          alert: "true",
          badge: true,
          sound: 'false'
        },
        windows: {}
      });
      push.on('registration', (data) => {
        console.log(data.registrationId);
        alert(data.registrationId.toString());
      });
      push.on('notification', (data) => {
        console.log(data);
        alert("Hi, Am a push notification");
      });
      push.on('error', (e) => {
        console.log(e.message);
      });
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }

  setLoggedin(){
    this.pages = AUTHORIZED_PAGES;
    this.loggedIn = true;
  }
}
/*
Notifications
http://docs.ionic.io/docs/push-overview

curl -X POST -H "Authorization: Bearer ac139b9f6cf6d06fe40be988d6a5a71f557131017978dc1c" -H "Content-Type: application/json" -d '{
    "tokens": ["x"],
    "profile": "UniteApp",
    "notification": {
        "message": "Hello World!"
    }
}' "https://api.ionic.io/push/notifications"

*/
