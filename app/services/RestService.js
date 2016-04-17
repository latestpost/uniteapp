import {Injectable} from 'angular2/core';
import {SERVER_URL} from './config';
import {Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/Rx';

let favorites = [],
    jobsURL = SERVER_URL + 'job',
    contactsURL = SERVER_URL + 'contact',
    ratesURL = SERVER_URL + 'rate',
    agreementsURL = SERVER_URL + 'agreement',
    trainingURL = SERVER_URL + 'training',
    newsURL = SERVER_URL + 'news',
    loginURL = SERVER_URL + 'auth/login',
    localStorage


@Injectable()
export class RestService {

    static get parameters() {
        return [[Http]];
    }

    constructor (http) {
        this.http = http;
        //this.authHttp = authHttp;
        this.localStorage = new Storage(LocalStorage);
        this.localStorage.set('id_token', 'faketoken');
    }

    findJobs() {
      console.log (tokenNotExpired());

        return this.http.get(jobsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    login(credentials) {

      return this.http.post(loginURL, JSON.stringify(credentials), { headers: this.contentHeader })
        .map(res => res.json())
        .catch(this.handleError);
    }

    findContacts() {
        return this.http.get(contactsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
