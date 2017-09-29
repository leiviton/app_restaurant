import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { RestaurantService } from './restaurant.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    dragging: boolean = false;
    dishes = {};
    restaurant: any = {};
    address: any = {};
    upload_status: string = 'not';
    restaurantPhoto: any = null;

    constructor(protected appHttpService: AppHttpService,protected httpService: RestaurantService){

    }
    ngOnInit(){
        this.appHttpService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                this.httpService.builder()
                    .view(id)
                    .then((res) => {
                        this.restaurant = res;
                        this.address = res.address || {};
                        window.Materialize.updateTextFields();
                    });
            });
    }

    upload(e){
        e.preventDefault();
        console.log(e);

        let image_url: any = null;
        if(e.dataTransfer)
        {
            image_url = e.dataTransfer.files[0];
        }else{
            image_url = e.target.files[0];
        }

        this.upload_status = 'sending';

        let formData = new FormData();
        formData.append('photo', image_url);

        this.httpService.builder()
            .upload(this.restaurant.id + '/upload', formData)
            .then(() => {
                this.upload_status = 'success';
            })
            .catch(() => {
                this.upload_status = 'error';
            });
    }

    dragover(e){
        e.stopPropagation();
        e.preventDefault();
        this.dragging = true;
    }

    searchCep() {
        let cep = this.address.cep || null;
        if (cep && cep.length === 8) {
            this.httpService.getCep(cep)
                .then((res) => {
                    this.address = {
                        cep: cep,
                        address: res.logradouro,
                        city: res.localidade,
                        neighborhood: res.bairro,
                        state: res.uf
                    }
                })
        }
    }
    save(e){
        e.preventDefault();
        this.httpService.builder()
            .update(this.restaurant.id, this.restaurant)
            .then(() => {
                return this.httpService.builder('/' + this.restaurant.id + '/address')
                        .insert(this.address);
            })
            .then(() => {
                window.Materialize.toast('Salvo com sucesso', 4000);
            });
    }

    preparePhoto(e) {
        let image_url = e.target.files[0];
        let formData = new FormData();
        formData.append('restaurant_id', this.restaurant.id);
        formData.append('url', image_url);
        this.restaurantPhoto = formData;
    }

    sendPhoto(){
        if(this.restaurantPhoto === null)
        {
            window.Materialize.toast('Selecione uma imagem para enviar', 4000, 'red');
            return;
        }
        this.httpService.builder()
            .upload('photos', this.restaurantPhoto)
            .then((res) => {

            });
    }
}