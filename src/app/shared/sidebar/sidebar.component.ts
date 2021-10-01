import { Component, OnInit } from '@angular/core';
import { GisfsService } from 'src/app/gifs/services/gisfs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifsService: GisfsService ) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.gifsService.historial;
  }

}
