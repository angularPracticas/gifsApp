import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GisfsService } from '../services/gisfs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor( private gifsService: GisfsService ) { }

  ngOnInit(): void {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar( ){
    const valor = this.txtBuscar.nativeElement.value;
    console.log( valor );
    if( valor.trim().length === 0){
      return;
    }
    this.gifsService.buscargifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
