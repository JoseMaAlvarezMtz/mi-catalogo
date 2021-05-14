import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  autoseleccionado!: Automovil;
  accion: string = '';

  constructor(public ActiveModal: NgbActiveModal) { }



  ngOnInit(): void {
  }

}
