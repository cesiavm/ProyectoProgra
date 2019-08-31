import { Component, OnInit ,Input} from '@angular/core';
import {  ApiService} from "../../services/api.service";
import { Fraternidad } from "src/app/models/fraternidad";

import {Router} from "@angular/router"
import { Usuario } from "../../models/usuario";
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  bo:Boolean=true;
  formuu:Boolean=false;
  usu:Usuario=new Usuario('','','','');
  usuario:Usuario=new Usuario('','','','');
 @Input() dato:Usuario=new Usuario('','da','','');
  fraternidades:Fraternidad[];
  formulario:boolean=false;
  constructor(  public api:ApiService,
    private router: Router) { }
    close(){
      this.bo=false;
      this.formulario=true;
      this.formuu=false;
    }
    open(){
      this.formulario=false;
      this.formuu=true;
    }
  submit(){
  
   this.api.postlogin(this.usu).subscribe(dato=>{
     if(dato.estado=='ok'){
  this.formulario=false;
   localStorage.setItem("token",dato.token);
this.dato=dato;
    this.router.navigateByUrl('api/fraternidad');
  
  
  

             }else{

             }
   });}
    submitregistrar(){
      this.api.newusuario(this.usuario).subscribe(dato=>{
        if(dato.estado=='ok'){
     this.formuu=false;
     // localStorage.setItem("token",dato.token);
     
       this.router.navigate(['api/fraternidad']);
     
     
     
   
                }else{
   //validar
   this.router.navigate(['api/usuario/login']);
                }
      });
    }
 
  ngOnInit() {
    
  }

}
