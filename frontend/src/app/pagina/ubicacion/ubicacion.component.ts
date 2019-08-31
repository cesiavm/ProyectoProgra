import { Component, OnInit } from '@angular/core';
import {  ApiService} from "../../services/api.service";
import {  Ubicacion} from "../../models/ubicacion";
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { DecimalPipe } from '@angular/common';
declare var ol: any;
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  ubi:Ubicacion=new Ubicacion();
  formuu:Boolean=false;
    map: any;
  lat=  -19.5844048;
  lng = -65.7603492;
  constructor(  public api:ApiService) { }
   nuevo(){
     if(this.formuu==true){this.formuu=false;}else
this.formuu=true;

   }
  submit(){
    this.api.newUbicacion(this.ubi).subscribe(dato=>{
      if(dato.estado=='ok'){
   this.formuu=false;
   // localStorage.setItem("token",dato.token);
   
  
   
   
   
 
              }else{
 //validar

              }
    });
  }
  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.lng, this.lat]),
        zoom: 8
      })
});
  }

}
