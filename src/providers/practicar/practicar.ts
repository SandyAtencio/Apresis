import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PracticarProvider {

  constructor(public http: HttpClient) {
  }

  getDataPracticar(){

    let promesa = new Promise( (resolve, reject) => {
      this.http.get('assets/data/data.practicar.json').subscribe( data => {
            resolve(data);
          }, err =>{
            reject(err);
          }
      );
    });

    return promesa;

  }

}
