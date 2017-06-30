import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import { CatalogoProductosComponent } from "./component/catalogo-productos/catalogo-productos.component";
import { DetalleProductoComponent } from "./component/detalle-producto/detalle-producto.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'catalogo-productos', component: CatalogoProductosComponent},
    {path: 'catalogo-productos/detalle-producto/:id', component: DetalleProductoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule{}