import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {AgreementsPage} from './pages/agreements/list';
import {JobsPage} from './pages/jobs/list';
import {JobNotificationsPage} from './pages/jobnotifications/list';
import {RatesPage} from './pages/rates/list';
import {NewsPage} from './pages/news/list';
import {ContactsPage} from './pages/contacts/list';
import {TrainingPage} from './pages/training/list';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { icon: 'beer', title: 'Home', component: HelloIonicPage },
      { icon: 'wifi', title: 'Reps Contact List', component: ListPage },
      { title: 'Construction Agreements', component: AgreementsPage },
      { title: 'Wage Rates', component: RatesPage },
      { title: 'News Feed', component: NewsPage },
      { title: 'Training', component: TrainingPage },
      { title: 'Search Jobs', component: JobsPage },
      { title: 'Job Notifications', component: JobNotificationsPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HelloIonicPage;
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
}
