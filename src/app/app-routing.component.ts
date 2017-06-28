import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import { CatalogoProductosComponent } from "./component/catalogo-productos/catalogo-productos.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'catalogo-productos', component: CatalogoProductosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule{}