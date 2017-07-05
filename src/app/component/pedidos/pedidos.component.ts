import { Component, OnInit } from '@angular/core';
import { Producto } from '../../domain/producto';
import { ProductosService } from '../../service/productos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  productosEnCarrito:Producto[];
  cantidadAgregados:number;
  constructor(private productosService:ProductosService,private location: Location,) { }

  ngOnInit() {
    this.productosEnCarrito = this.productosService.getProductosAgregadosAlCarrito();
    this.cantidadAgregados = this.productosEnCarrito.length;
  }

  goBack(): void {
      this.location.back();
  }
}
