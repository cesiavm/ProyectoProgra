import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable, ObservedValueOf } from 'rxjs';

interface locacion{
  latitude:number;
  longitude:number;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlServe:string='http://localhost:3000/api/'
  

  constructor(private http:HttpClient) { }
  postlogin(usu):Observable<any>{
    return this.http.post(this.urlServe+'usuario/login/',usu);
  }
  getlocation():Observable<any>{
    return this.http.get<locacion>(this.urlServe+'fraternidad/');
  }
  getfrate():Observable<any>{
    return this.http.get(this.urlServe+'fraternidad/');
  }
  newfrate(frate):Observable<any>{
    delete frate._id;
    return this.http.post(this.urlServe+'fraternidad/',frate);
  }
   newusuario(usuario):Observable<any>{
     delete usuario._id;
     return this.http.post(this.urlServe+'usuario/',usuario);
   }
    newUbicacion(ubi):Observable<any>{
      delete ubi._id;
      return this.http.post(this.urlServe+'ubicacion',ubi);
    }
}
