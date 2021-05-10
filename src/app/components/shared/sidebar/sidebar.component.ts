import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get busquedas():string[]{
    return this.GifsService.getHistorial;
  }
  constructor(private GifsService:GifsService) { 
    
  }
  
  ngOnInit(): void {
  }

  textValue(textValue: string){
    // console.log(textValue);
    this.GifsService.setHistorial(textValue);
  }
  
}
