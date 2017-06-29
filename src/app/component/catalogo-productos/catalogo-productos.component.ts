import { Component, OnInit } from '@angular/core';
import { Producto } from '../../domain/producto';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  producto:Producto = { 
    nombre:"Aguacate", 
    imagen:"aguacate.jpg", 
    precio: 4000, 
    unidadesDisponibles:50
  };
  constructor() { }

  ngOnInit() {
  }

}
