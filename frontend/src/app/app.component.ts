import { Component } from '@angular/core';
import {ApiService} from './services/api.service';
declare var ol: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  bo:Boolean=false;
 /* lat:number=-19.5836100;
  lng:number=-65.7530600;*/
  lat:number=-19.5836100;
  lng:number=-65.7530600;
  mapType = 'satellite';
   locacion:Object;
   constructor(private map:ApiService){}
   close()
{ this.bo=false;}   
ngOnInit(){
      this.map.getlocation().subscribe(data=> {
        console.log(data);
        this.lat=data.latitude;
        this.lng=data.longitude;
      })
    }
}
