import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, GifsInterfaces } from '../model/gifs-Interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey:string = "66buoyEuy7jCCGZZiDLWJUIIFPVI2hkA"
  private _historial : string [] = [];

  private _resultados : Gif [] = [];

  get getResultados():Gif[]{
    return [...this._resultados];
  };

  get getHistorial():string[]{
    return [...this._historial];
  };

  constructor( private http:HttpClient ) {}
    
  setHistorial( termino : string = ""):void {
    termino = termino.trim().toLocaleLowerCase();
    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0,10);
      console.log(this._historial);
    }

    this.http.get<GifsInterfaces>(`https://api.giphy.com/v1/gifs/search?api_key=66buoyEuy7jCCGZZiDLWJUIIFPVI2hkA&q=${termino}&limit=10`)
          .subscribe( (resp) => { 
            // console.log(resp.data);
            this._resultados = resp.data;
            console.log(this._resultados);
          });
  }

}
