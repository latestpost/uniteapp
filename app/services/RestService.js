import {Injectable} from 'angular2/core';
import {SERVER_URL} from './config';
import {Storage, LocalStorage} from 'ionic-angular';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/Rx';

let jobsURL = SERVER_URL + 'project',
    contactsURL = SERVER_URL + 'contact',
    ratesURL = SERVER_URL + 'rate',
    agreementsURL = SERVER_URL + 'agreement',
    trainingURL = SERVER_URL + 'training',
    newsURL = SERVER_URL + 'news',
    messagesURL = SERVER_URL + 'message',
    loginURL = SERVER_URL + 'auth',
    registerURL = SERVER_URL + 'register/register'
    localStorage


@Injectable()
export class RestService {

    static get parameters() {
        return [[Http],[AuthHttp]];
    }

    constructor (http,authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.localStorage = new Storage(LocalStorage);
    }

    login(credentials) {
      return this.http.post(loginURL, JSON.stringify(credentials), { headers: this.contentHeader })
        .map(res => res.json())
        .catch(this.handleError);
    }

    register(id) {
      return this.http.post(registerURL, JSON.stringify(id), { headers: this.contentHeader })
        .map(res => res.json())
        .catch(this.handleError);
    }

    addProject(data) {
      return this.http.post(jobsURL, JSON.stringify(data), { headers: this.contentHeader })
        .map(res => res.json())
        .catch(this.handleError);
    }

    findJobs() {
      // public access
      return this.http.get(jobsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findMessages() {
      // public access
      return this.http.get(messagesURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findContacts() {
      // needs token to get access
      let token = this.localStorage.get('id_token');
      return this.http.get(contactsURL, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token._result
          }
      })
      .map(res => res.json())
      .catch(this.handleError);
    }

    findRates() {
      // public access
      return this.http.get(ratesURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    findAgreements() {
      // public access
      return this.http.get(agreementsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
