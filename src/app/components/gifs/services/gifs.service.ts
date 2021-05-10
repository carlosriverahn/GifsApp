import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifsInterfaces } from '../model/gifs-Interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private baseUrl:string = "https://api.giphy.com/v1/gifs"
  private apiKey:string = "66buoyEuy7jCCGZZiDLWJUIIFPVI2hkA"
  private _historial : string [] = [];

  private _resultados : Gif [] = [];

  get getResultados():Gif[]{
    return [...this._resultados];
  };

  get getHistorial():string[]{
    return [...this._historial];
  };
  
  constructor( private http:HttpClient ) {
    this._historial = JSON.parse( localStorage.getItem("historial")! ) || [];
    this._resultados = JSON.parse( localStorage.getItem("resultados")! ) || [];
  }
    
  setHistorial( termino : string = ""):void {
    // debugger
    termino = termino.trim().toLocaleLowerCase();
    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
      // console.log(this._historial);
    }

    // debugger
    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("q", termino)
    .set("limit", "10");
    // console.log(params); 

    this.http.get<GifsInterfaces>(`${this.baseUrl}/search?`,{ params })
          .subscribe( (resp) => {
            // console.log("1", resp.data);
            this._resultados = resp.data;
            localStorage.setItem("resultados", JSON.stringify(this._resultados));
            // console.log("2", this._resultados);
          });
  }

}
