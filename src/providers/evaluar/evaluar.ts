import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";


@Injectable()
export class EvaluarProvider {

  constructor(public httpClient: HttpClient, public http:Http) {
    console.log('Hello EvaluarProvider Provider');
  }

  getDataEvaluar(){

    let promesa = new Promise( (resolve, reject) => {

        this.http.get('assets/data/data.evaluar.json').map(res => res.json()).subscribe(data => {
            resolve(data);
          }, err =>{
            reject(err);
          }
        )

    });

    return promesa;

  }

}
