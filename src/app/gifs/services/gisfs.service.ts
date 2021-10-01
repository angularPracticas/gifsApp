import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GisfsService {

  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  buscargifs( query: string){
    query = query.trim().toLowerCase();
    if( !this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }
    console.log( this._historial );
  }
}
