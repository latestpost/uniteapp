import {Injectable} from 'angular2/core';
import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let favorites = [],
    jobsURL = 'http://www.unite4jobs.co.uk:1401/job',
    contactsURL = 'http://www.unite4jobs.co.uk:1401/contact',
    ratesURL = 'http://www.unite4jobs.co.uk:1401/rate',
    agreementsURL = 'http://www.unite4jobs.co.uk:1401/agreement',
    trainingURL = 'http://www.unite4jobs.co.uk:1401/training',
    newsURL = 'http://www.unite4jobs.co.uk:1401/news'

@Injectable()
export class RestService {

    static get parameters() {
        return [[Http]];
    }

    constructor (http) {
        this.http = http;
    }

    findJobs() {
        return this.http.get(jobsURL)
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
