import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-dishe',
    templateUrl: './new-dishe.component.html'
})
export class NewDisheComponent implements OnInit {
    
    dish: any = {};

    constructor(private router: Router) {}

    ngOnInit () {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes'])});
        jQuery('.modal').modal('open');
    }

    save(e) {
        e.preventDefault();
        window.Materialize.toast('Salvo com sucesso', 3000);
    }
}