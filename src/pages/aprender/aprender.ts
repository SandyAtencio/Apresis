import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PilasPage, ColasPage } from "../index.paginas";



@Component({
  selector: 'page-aprender',
  templateUrl: 'aprender.html',
})
export class AprenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  irAPaginaPilas(){
    this.navCtrl.push( PilasPage );
  }

  irAPaginaColas(){
    this.navCtrl.push( ColasPage );
  }

}
