import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/homepage/homepage';
import {AgreementsPage} from './pages/agreements/list';
import {JobsPage} from './pages/jobs/list';
import {JobNotificationsPage} from './pages/jobnotifications/list';
import {RatesPage} from './pages/rates/list';
import {NewsPage} from './pages/news/list';
import {ContactsPage} from './pages/contacts/list';
import {TrainingPage} from './pages/training/list';
import {LoginPage} from './pages/login/login';
import {ProjectPage} from './pages/project/project';
import {provide} from 'angular2/core';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from 'angular2/http'

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
    this.loggedIn = false;

    // set our app's pages
    this.app.pages = [
      { icon: 'login', title: 'Login', component: LoginPage },
    ];
    this.rootPage = LoginPage;
    if (this.loggedIn){
      this.rootPage = HomePage;
      this.setLoggedin();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
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
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'contact', title: 'Reps Contact List', component: ContactsPage },
      { icon: 'document', title: 'Construction Agreements', component: AgreementsPage },
      { icon: 'wifi', title: 'Wage Rates', component: RatesPage },
      { icon: 'basket', title: 'News Feed', component: NewsPage },
      { icon: 'calendar', title: 'Training', component: TrainingPage },
      { icon: 'people', title: 'Search Jobs', component: JobsPage },
      { icon: 'wifi', title: 'Job Notifications', component: JobNotificationsPage },
      { icon: 'project', title: 'Add Project', component: ProjectPage },
      { icon: 'login', title: 'Login', component: LoginPage },
    ];
    this.loggedIn = true;
    setTimeout(() => { this.rootPage = HomePage; }, 5);
  }
}
