import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


import { AprenderProvider } from "../../../providers/aprender/aprender";


@Component({
  selector: 'page-pilas',
  templateUrl: 'pilas.html',
})
export class PilasPage {

  public objetoAprender:any = {};

  constructor(public serviceAprender: AprenderProvider , public dom: DomSanitizer) {

    serviceAprender.getDataAprender().then( data => {
      
      this.objetoAprender = data['Aprender'].Pilas ;

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
