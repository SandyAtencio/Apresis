import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Juego1Page, Juego2Page } from "../index.paginas";

@Component({
  selector: 'page-practicar',
  templateUrl: 'practicar.html',
})
export class PracticarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  irAJuego1(){
    this.navCtrl.push( Juego1Page );
  }

  irAJuego2(){
    this.navCtrl.push( Juego2Page );
  }

}
