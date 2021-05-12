import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../servicios/autos.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  faTrash = faTrash;
  faEdit = faEdit;

  pageSize = 15;
  page = 1;
  automoviles: Automovil[] = [];
  constructor(private autoService: AutosService) { }

  ngOnInit(): void {

    this.autoService.getautos().subscribe((autosTemp)=>{
      this.automoviles = autosTemp.data ;
    })
    
  }

}
