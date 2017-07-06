import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usuario } from '../domain/usuario';
import { Producto } from '../domain/producto';  
import 'rxjs/Rx';

@Injectable()
export class DatabaseService{

  constructor(private http: Http) { }
  
  getUsuarios():Promise<Usuario[]>{
    return this.http.get('https://tienda-9303e.firebaseio.com/usuarios.json').toPromise()
            .then(response  =>  response.json() as Usuario[])
            .catch(function(){
              console.log("error");
            }); 
  }

  getProductos():Promise<Producto[]>{
    return this.http.get('https://tienda-9303e.firebaseio.com/productos.json').toPromise()
            .then(response  =>  response.json() as Producto[])
            .catch(function(){
              console.log("error");
            });
  }
  getPedidos():Promise<Producto[]>{
    return this.http.get('https://tienda-9303e.firebaseio.com/pedidos.json').toPromise()
            .then(response  =>  response.json() as Producto[])
            .catch(function(){
              console.log("error");
            });
  }
  addPedido(producto:Producto):Promise<Producto>{
    const data = JSON.stringify(producto);
    return this.http.post('https://tienda-9303e.firebaseio.com/pedidos.json', data)
      .toPromise()
      .then(response  =>  response.json() as Producto)
      .catch(function(){
        console.log("error");
      });
  }
}
