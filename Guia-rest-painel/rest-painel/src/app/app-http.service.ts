import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService{
    protected url: string;
    protected header: Headers;

    request() {
        return this.http;
    }

    getUser()
    {
        return this.builder('auth/me').list();
    }

    constructor (protected http:Http){
        this.setAccessToken();
    }

    setAccessToken(){
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE1ZWM3OGUwOTQ1ZDRkZmJkMjcyZDlkNTFhZGIwMDgwOWRlZjM5ZWViYWMxNTZmZmU0NTkyYjkwNmNkODM0ZWZkNzNiMWE3YmM1YWRhM2IwIn0.eyJhdWQiOiIzIiwianRpIjoiYTVlYzc4ZTA5NDVkNGRmYmQyNzJkOWQ1MWFkYjAwODA5ZGVmMzllZWJhYzE1NmZmZTQ1OTJiOTA2Y2Q4MzRlZmQ3M2IxYTdiYzVhZGEzYjAiLCJpYXQiOjE1MDUxNDM3NjgsIm5iZiI6MTUwNTE0Mzc2OCwiZXhwIjoxNTM2Njc5NzY3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pe4Y8REYCp5BP5VXancgU22ZFnGVgTUNnd0Q-WAPWE-uwy1oQqu1zlWpv_4s0uRTZfg2XlyPzXTk1hrvp0xRC5-umAsp7zCx6DKFPqH78p9kUbbmTi2oOK0ThhRoJyfNbFvoLOF8YZo8nufZgq3q_pjlpSSRwKCJo3gSf-0i3gXYu2b7cDcIQvzDmHoW5QDomx2xOFstDyRmlttkghu1Q8hfWCXk4FYG1MvmJZYeOgZPi4xWpejpt5gF0uWq3V_JRi8_cckGz3hyz9PhP2rJMw8ldh6lqpZUassNqBmelk6rYHw6A_NlATYU4C17tu6QviV3fbOH52qxhzU8JAyXz4V3et0uEOg8FOaW0IR0ppUwFReo0DnWBY-vP8hNbu44Eb7N5brB_F2If-qhYFC9lMFz5lSrDc1VCiuvYN6AFea6dTl9UbQIoBWbsXGOexv1koVlvCNiXrqOdjeOHe1454RpmflImTC-7NGMKe9zOsVi_tj3zhTdu7gXEeAtHmhkm1SeObl95Htc6tA1sMeINpwg5-a_T9X51FzEHWHuUIxXLw9XEMaAH7L1q9AXKadtJqLrl0Anw_42HYnIfwuVNE8GG1fc5ACC9dKTXgBTiSuVYwq9pJARGAVW55lO6FrAxjOYWWCl4KbYKBuQrm-fyxnG8fpgKmUhwG-c3LBmkgU';
        this.header = new Headers({'Authorization': 'Bearer ' + token,'Accept':'application/json'});
    }

    builder(resource: string){
        this.url = environment.server_url + '/api/v1/' + resource;
        return this;
    }

    list(options: Object = {}){
        return this.http.get(this.url, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }

    view(id: number){
        return this.http.get(this.url + '/' + id, {headers: this.header})
            .toPromise()
            .then((res) => {
                return res.json() || {};
            });
    }

    update(id: number, data: object)
    {
        return this.http.put(this.url + '/' + id, data, {headers: this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }

    insert (data: object)
    {
        return this.http.post(this.url, data, {headers: this.header})
        .toPromise()
        .then((res) => {
            return res.json() || {};
        });
    }
}