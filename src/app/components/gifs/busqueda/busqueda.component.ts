import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  buscar():void{
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return
    }
    
    this.gifsService.setHistorial(valor);
    this.txtBuscar.nativeElement.value = "";
  }
  constructor( private gifsService:GifsService ) { }

  ngOnInit(): void {
  }

}
