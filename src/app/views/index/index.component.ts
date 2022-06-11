import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
lista: any = [];
ofertasSrv: any;
  constructor(
    ofertasSrv: OfertasService,
  ) {}

  ngOnInit() {
    
  }

  getOfertas(){
    
  }

}
