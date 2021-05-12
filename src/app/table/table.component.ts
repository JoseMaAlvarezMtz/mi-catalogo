import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  automoviles: Automovil[] = [];
  constructor(private autoService: AutosService) { }

  ngOnInit(): void {

    this.autoService.getautos().subscribe((autosTemp)=>{
      this.automoviles = autosTemp.data ;
    })
    
  }

}
