import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Automovil } from '../models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];
  autoseleccionado!: Automovil;

  faEye = faEye;
  pageSize = 10;
  page = 1;

  closeResult = '';

  constructor(private modalService: NgbModal, private autoService: AutosService) {}

  open(content: any, auto: Automovil) {
    this.autoseleccionado = auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.autoService.getautos().subscribe((autosTemp)=>{
      this.autos = autosTemp.data ;
    })
  }


  onSelect(auto: Automovil){
    this.autoseleccionado = auto;
    console.log(this.autoseleccionado);

  }
}
