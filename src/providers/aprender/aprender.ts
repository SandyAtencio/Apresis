import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


@Injectable()
export class AprenderProvider {

  constructor(public http: HttpClient) {
  }

  getDataAprender(){

    let promesa = new Promise( (resolve, reject) => {
      this.http.get('assets/data/data.aprender.json').subscribe( data => {
            resolve(data);
          }, err =>{
            reject(err);
          }
      );
    });

    return promesa;
    
  }

}
