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
    jwtURL = SERVER_URL + 'user/jwt'
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

    findJobs() {
      console.log (tokenNotExpired());

        return this.http.get(jobsURL)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getJWT() {
      let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0OXx1bmRlZmluZWQiLCJzdWIiOiJzdWJqZWN0IiwiYXVkIjoiYXBwIG5hbWUiLCJleHAiOjE0NjE1MTYwMDQ2MzYsIm5iZiI6MTQ2MDkxMTIwNDYzNywiaWF0IjoxNDYwOTExMjA0NjM3LCJqdGkiOiIwOTgzNjNlMC0wNGJiLTExZTYtOTUxMi1hOTllNWVmMzQ5NzYifQ.gpDmSmQ51PwWRQRGe83-1g-panB-rpb9sG4NPZ_HXqM";
      this.localStorage.set('id_token', token);
      /*
      return this.http.get(jwtURL)
          .map(res => res.json())
          .catch(this.handleError);
    */
    }

    login(credentials) {
      return this.http.post(loginURL, JSON.stringify(credentials), { headers: this.contentHeader })
        .map(res => res.json())
        .catch(this.handleError);
    }

    findContacts() {
      let token = this.localStorage.get('id_token');
      return this.http.get(contactsURL, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'access_token': token._result
          }
      })
      .map(res => res.json())
      .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
