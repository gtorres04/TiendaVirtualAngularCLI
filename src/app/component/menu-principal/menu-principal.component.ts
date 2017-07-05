import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../domain/producto';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  @Input() cantidadAgregados:Number;
  
  constructor() { }

  ngOnInit() {
  }

}
