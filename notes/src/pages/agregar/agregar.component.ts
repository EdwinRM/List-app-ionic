import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'page-agregar',
    templateUrl:'agregar.component.html'
})
export class AgregarPage{

    lista: Lista;
    nombreItem :string = '';

    constructor( public deseosService: DeseosService,
                  private navParams: NavParams){

                //  console.log(this.navParams);
   // console.log( this.navParams.get('titulo'));
     
                   
     const titulo = this.navParams.get('titulo');
     this.lista = new Lista(titulo);
 

    }

 agregarItem(){

      //  console.log(this.nombreItem);
        
      if( this.nombreItem.length ===0){
            return;
        }

        const nuevoItem = new ListaItem(this.nombreItem);
        this.lista.items.push( nuevoItem);

        this. nombreItem = '';
   }

   actualizarTarea(item: ListaItem){
       item.completado = !item.completado;
   }


    borrar(idx: number){
        this.lista.items.splice(idx,1);
    }
}