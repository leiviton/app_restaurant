import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent{
   
    user: any = {
        password: null,
        password_confirmation:null
    }
}