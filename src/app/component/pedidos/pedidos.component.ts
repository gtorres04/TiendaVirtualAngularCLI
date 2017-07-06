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
  totalAPagar:number = 0;
  constructor(private productosService:ProductosService,private location: Location) { }

  ngOnInit() {
    this.productosEnCarrito = this.productosService.getProductosAgregadosAlCarrito();
    this.cantidadAgregados = this.productosEnCarrito.length;
    for (var index = 0; index < this.productosEnCarrito.length; index++) {
      var element:Producto = this.productosEnCarrito[index];
      this.totalAPagar += element.precio * element.cantidadAComprar;
    }
  }

  goBack(): void {
      this.location.back();
  }

  cancelarPedidos():void{
    this.productosService.cleanProductosAgregadosAlCarrito();
  }

  pagarPedidos(): void{
    for (var index = 0; index < this.productosEnCarrito.length; index++) {
      var element:Producto = this.productosEnCarrito[index];
      this.productosService.addPedido(element);
    }
  }

}
