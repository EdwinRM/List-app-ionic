import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage{

    lista: Lista;
    nombreItem :string = '';

    constructor( public deseosService: DeseosService){
        
    }

    agregarItem(){
        if( this.nombreItem.length ===0){
            return;
        }

        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push( nuevoItem);

        this. nombreItem = '';
    }

}