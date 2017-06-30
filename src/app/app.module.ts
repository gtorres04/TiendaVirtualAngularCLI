import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { MenuPrincipalComponent } from './component/menu-principal/menu-principal.component';
import { AppRoutingModule } from './app-routing.component';
import { UsuariosService } from './service/usuarios.service';
import { DatabaseService } from './db/database.service';
import { CatalogoProductosComponent } from './component/catalogo-productos/catalogo-productos.component';
import { ItemProductoComponent } from './component/item-producto/item-producto.component';
import { ProductosService } from './service/productos.service';
import { DetalleProductoComponent } from './component/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrincipalComponent,
    CatalogoProductosComponent,
    ItemProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UsuariosService,
    DatabaseService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
