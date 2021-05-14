import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../servicios/autos.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  faTrash = faTrash;
  faEdit = faEdit;

  pageSize = 10;
  page = 1;
  automoviles: Automovil[] = [];
  agregar: Automovil = {
    marca: '',
    submarca: '',
    modelo: [],
    descripcion: '',
    fecha_registro: new Date()
}

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  openModal(auto: Automovil) {
    const modalRef = this.modalService.open(ModalEditarComponent, {centered: true});
    modalRef.componentInstance.autoseleccionado = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result;

  }

  agregarModal(){
    const modalRef = this.modalService.open(ModalEditarComponent, {centered: true});
    modalRef.componentInstance.autoseleccionado = this.agregar;
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result;
  }

  ngOnInit(): void {

    this.autoService.getautos().subscribe((autosTemp)=>{
      this.automoviles = autosTemp.data ;
    })
    
  }

}
