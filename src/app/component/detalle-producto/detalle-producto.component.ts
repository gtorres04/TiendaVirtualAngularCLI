import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { Producto } from '../../domain/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto:Producto=new Producto();
  constructor(private location: Location, 
              private route: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit() {
    let idProducto:Number=0;
    this.route.params.subscribe(params => {
      if(params['id'] != null){
          this.consultarProductoPorId(Number.parseInt(params['id']));
      }
    });
  }
  consultarProductoPorId(id:Number):void{
    this.productosService.getProductosById(id)
    .then(productoReturn => this.producto = productoReturn as Producto);
  }
  goBack(): void {
      this.location.back();
  }
}
