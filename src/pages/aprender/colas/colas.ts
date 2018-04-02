import { Component } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { AprenderProvider } from "../../../providers/aprender/aprender";


@Component({
  selector: 'page-colas',
  templateUrl: 'colas.html',
})
export class ColasPage {

  public objetoAprender:any = {};


  constructor(public serviceAprender: AprenderProvider , public dom: DomSanitizer) {

    serviceAprender.getDataAprender().then( data => {
      
      this.objetoAprender = data['Aprender'].Colas ;

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
    console.log('ionViewDidLoad ColasPage');
  }

}
