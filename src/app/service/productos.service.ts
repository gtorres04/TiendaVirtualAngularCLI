import { Injectable } from '@angular/core';
import { DatabaseService } from '../db/database.service';
import { Producto } from '../domain/producto';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  productosTemporalesCarrito:Producto[]=[];

  constructor(private databaseService:DatabaseService) { 
  }

  getProductos():Promise<Producto[]>{
    return this.databaseService.getProductos().then(productos => {
      var productoAll:Producto[] = productos as Producto[];
      return this.databaseService.getPedidos().then(response => {
        let pedidos:Producto[]=response as Producto[];
        for (let pedido in pedidos) {
          var elementPedido = pedidos[pedido] as Producto;
          for (var index = 0; index < productoAll.length; index++) {
            var elementProducto = productoAll[index];
            if(elementProducto.id === elementPedido.id){
              elementProducto.unidadesDisponibles -= elementPedido.cantidadAComprar;
            }
          }
        }
        return productoAll;
      });
    });
  }
  
  getProductosById(id:Number):Promise<Producto>{
    return this.getProductos()
    .then(
      productos => {
        let productosAux = productos as Producto[];
        var productoEncontrado:Producto=undefined;
        for (var index = 0; index < productosAux.length; index++) {
          var element:Producto = productosAux[index];
          if(id === element.id){
            productoEncontrado = element;
            break;
          }
        }
        return productoEncontrado;
      }
    );
  }

  agregarProductoAlCarrito(producto:Producto):void{
    this.productosTemporalesCarrito.push(producto);
  }

  getProductosAgregadosAlCarrito():Producto[]{
    return this.productosTemporalesCarrito;
  }

  cleanProductosAgregadosAlCarrito(){
    this.productosTemporalesCarrito = [];
  }
  
  addPedido(producto:Producto):Promise<Producto>{
    return this.databaseService.addPedido(producto);
  }
}
