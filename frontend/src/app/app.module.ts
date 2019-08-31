import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbicacionComponent } from './pagina/ubicacion/ubicacion.component';
import {  HttpClientModule} from "@angular/common/http"; 
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { FraternidadComponent } from './pagina/fraternidad/fraternidad.component';
//import{ImageUploadModule} from 'angular2-image-upload';
import { UsuarioComponent } from './pagina/usuario/usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    UbicacionComponent,
    FraternidadComponent,
    UsuarioComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  //  ImageUploadModule,
   AgmCoreModule.forRoot({
      apiKey:'AIzaSyCLw6e5uu6LSEeLRli5ljik_4ZmVmR7VjE'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
