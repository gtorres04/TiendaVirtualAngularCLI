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
  constructor(private productosService:ProductosService) { }

  ngOnInit() {
    this.productosService.getUsuario().then(productos => {
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

}
