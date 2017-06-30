import { Injectable } from '@angular/core';
import { DatabaseService } from '../db/database.service';
import { Producto } from '../domain/producto';
import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductosService {

  constructor(private databaseService:DatabaseService) { 
  }

  getUsuario():Promise<Producto[]>{
    return this.databaseService.getProductos().then(productos => productos as Producto[]);
  }
}
