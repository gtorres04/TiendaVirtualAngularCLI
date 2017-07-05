import { Component, OnInit } from '@angular/core';
import { Producto } from '../../domain/producto';
import { ProductosService } from '../../service/productos.service';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})

export class CatalogoProductosComponent implements OnInit {
  productos:Producto[];
  productosBuscados:Producto[];
  productoAAgregar:Producto;
  cantidadAgregados:Number;
  constructor(private productosService:ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().then(productos => {
      this.productos = productos as Producto[];
      this.productosBuscados = productos as Producto[];
    });
  }

  buscarProductos(val){
    this.productosBuscados = [];
    for (var index = 0; index < this.productos.length; index++) {
      var element = this.productos[index];
      if(element.nombre.includes(val)){
        this.productosBuscados.push(element);
      }
    }
  }

  agregarProductoAlCarrito(event){
    let productoRecibido = event.producto as Producto;
    this.productoAAgregar = new Producto();
    this.productoAAgregar.id = productoRecibido.id;
    this.productoAAgregar.nombre = productoRecibido.nombre;
    this.productoAAgregar.precio = productoRecibido.precio;
    this.productoAAgregar.imagen = productoRecibido.imagen;
    this.productoAAgregar.unidadesDisponibles = productoRecibido.unidadesDisponibles;
    this.productoAAgregar.cantidadAComprar = event.cantidad;
    this.productosService.agregarProductoAlCarrito(this.productoAAgregar);
    this.cantidadAgregados = this.productosService.getProductosAgregadosAlCarrito().length;
  }

}
