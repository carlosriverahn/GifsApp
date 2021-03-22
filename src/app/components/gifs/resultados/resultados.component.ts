import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { GifsInterfaces } from '../model/gifs-Interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {
 
  get resultados(){
    return this.gifsService.getResultados;
  }

  constructor( private gifsService:GifsService ) {

  }

  

  ngOnInit(): void {
  }

}
