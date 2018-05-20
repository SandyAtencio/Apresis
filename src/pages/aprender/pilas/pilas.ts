import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { AprenderProvider } from "../../../providers/aprender/aprender";


@Component({
  selector: 'page-pilas',
  templateUrl: 'pilas.html',
})
export class PilasPage {

  public objetoAprender:any = {};
  public cargaNoticia: boolean;

  constructor(public serviceAprender: AprenderProvider , public dom: DomSanitizer) {

    this.serviceAprender.getDataAprender().then( data => {
      
      this.objetoAprender = data['Aprender'].Pilas ;

      this.cargaNoticia = true;

    }).catch(err => {

      console.log(err)

    })

  }

  showVideo(whatvideo:number){
    if (whatvideo == 1)
      return this.dom.bypassSecurityTrustResourceUrl(this.objetoAprender.video);
    else
      return this.dom.bypassSecurityTrustResourceUrl(this.objetoAprender.video_2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilasPage');
  }

}
