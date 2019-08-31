import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FraternidadComponent } from './pagina/fraternidad/fraternidad.component';
import { UbicacionComponent } from './pagina/ubicacion/ubicacion.component';
import { UsuarioComponent } from './pagina/usuario/usuario.component';


const routes: Routes = [
  {
    path: 'api/fraternidad',
    component: FraternidadComponent
  },
  {path:'api/ubicacion',component:UbicacionComponent},
  {path:'api/usuario',component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[FraternidadComponent]
