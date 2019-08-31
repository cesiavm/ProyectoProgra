import { Component, OnInit ,Input} from '@angular/core';
import {  ApiService} from "../../services/api.service";
import { Fraternidad } from "../../models/fraternidad";
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from "@angular/router"
//import { eventNames } from 'cluster';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-fraternidad',
  templateUrl: './fraternidad.component.html',
  styleUrls: ['./fraternidad.component.css']
})
export class FraternidadComponent implements OnInit {
  
  lista:Fraternidad[];
  formulario:boolean=false;
  formu:boolean=false;
  frat:Fraternidad=new Fraternidad('','','',null,'','');
  selectedFile:File=null;
  filedata:File=null;
  previewurl:any=null;
  form:boolean=false;
  fileUploadProgress: string = null;
uploadedFilePath: string = null;
frate:FormGroup;
  //private image:ImageSelected=null;
 
  constructor(
    public api:ApiService,
    private router: Router
  ) { }


  upload(e){
this.selectedFile=<File>e.target.files[0];


  }
  subir(){

  }
  ngOnInit() {
    this.frate = new FormGroup ({
      fotos: new FormGroup ({
        foto :new FormControl(''),pie: new FormControl('')})

    });
    this.form=true; 
    this.api.getfrate().subscribe(dato=>{
      if(dato.estado=='ok'){
        this.lista=dato.lista;
              }else{
                console.log('paso algo: .');
              }
    });
  }
  onUploadFinish(event) {
    console.log(event);
   }


  

  nuevo(){
    this.formulario=true;
    this.form=false;
  }
  subirfoto(event){
  //this.selectedfile=event.target.files[0];
  this.filedata=<File>event.target.files[0];
  }
  fileProgress(fileInput: any) {
    this.filedata = <File>fileInput.target.files[0];
    this.preview();
}
  preview(){
    var mimetype =this.filedata.type;
    if(mimetype.match(/image\/*/)==null){
      return;
    }
    var reader= new FileReader();
  reader.readAsDataURL(this.filedata);
reader.onload=(_event)=>{
  this.previewurl=reader.result;
}
}
  submit(){
      //this.frat.foto=this.selectedFile;
      console.log(this.frat);
   this.api.newfrate(this.frat).subscribe(dato=>{
    this.uploadedFilePath = dato.data.filePath;
     if(dato.estado=='ok'){
    this.form=true;
       this.formulario=false;
       this.lista.push(dato.nuevo);
      
             }else{
//validar}
             }     
   });
  }
  cancelar(){
    this.formulario=false;
   this.form=true;
  }
  abrir(){
    if(this.formu==true){
      this.formu=false;
    }else
this.formu=true;
  }
 

}
