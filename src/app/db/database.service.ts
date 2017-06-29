import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usuario } from '../domain/usuario'; 
import 'rxjs/Rx';

@Injectable()
export class DatabaseService{

  usuarios :Usuario[];

  constructor(private http: Http) { }
  
  getUsuarios():Promise<Usuario[]>{
    return this.http.get('https://tienda-9303e.firebaseio.com/usuarios.json').toPromise()
            .then(response  =>  response.json() as Usuario[])
            .catch(function(){
              console.log("error");
            }); 
  }
}