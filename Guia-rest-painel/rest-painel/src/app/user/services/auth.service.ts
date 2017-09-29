import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    eventEmitter: EventEmitter<any> = new EventEmitter();

    builder (resource: string = '') {
       
    }

    getUser() {
       
    }

    changePassword(data) {
        
    }

    editProfile(data) {
       
    }

    login(data) {
       
    }

    logout() {
       
    }
}