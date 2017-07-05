import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../domain/producto';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  @Input() producto:Producto;
  @Output() productoAgregar = new EventEmitter();
  cantidadAgregar:Number;
  cantidadTotalUnidadesDisponibles:number;

  constructor() { }

  ngOnInit() {
    this.cantidadTotalUnidadesDisponibles = this.producto.unidadesDisponibles;
  }
  
  agregarProductoAlCarrito(){
    this.producto.unidadesDisponibles = this.cantidadTotalUnidadesDisponibles;
    this.productoAgregar.emit(
      {
        producto:this.producto, 
        cantidad:this.cantidadAgregar
      }
    );
  }
  calcularUnidadesDisponibles(val:number){
    this.cantidadTotalUnidadesDisponibles = this.producto.unidadesDisponibles-val;
  }
}
