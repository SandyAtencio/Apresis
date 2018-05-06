import { Component } from '@angular/core';
import { NavController, reorderArray, AlertController } from 'ionic-angular';

import { PracticarProvider } from "../../../providers/practicar/practicar";


@Component({
  selector: 'page-juego3',
  templateUrl: 'juego3.html',
})

export class Juego3Page {

  public verificationArray:any[] = [];
  public fraseArray:any[] = [];
 
  constructor(public navCtrl: NavController, public servicePracticar: PracticarProvider, public alertCtrl: AlertController) {
  }

  reordenarFrase(evento){

    this.verificationArray = reorderArray( this.verificationArray , evento);
    this.fraseArray = reorderArray( this.fraseArray , evento);

  }

  verificationWord(){

    let validateArray:any[] = ['1','2','3'];
    var verificador = true;

    for (let index = 0; index < this.verificationArray.length; index++) {
      
      if( validateArray[index] != this.verificationArray[index]){
            verificador = false;
      }

    }

    this.mostrarMsj(verificador);

  }

  mostrarMsj(showAlert:boolean){

    var titulo= "";

    if(showAlert){
      titulo = '¡Felicitaciones has ordenado la frase correctamente!';
    }else{
      titulo = '¡Lo sentimos has ordenado la frase incorrectamente!';
    }

    let confirm = this.alertCtrl.create({
      title: titulo,
      message: '¿Deseas jugar de nuevo?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.verificationArray = [];
            this.fraseArray = [];
            this.cargaInformacion();
          }
        }
      ]
    });
    confirm.present();

  }

  ionViewDidEnter(){
    this.cargaInformacion();
  }

  cargaInformacion(){

    this.servicePracticar.getDataPracticar().then( data => {

      let aleatorio = Math.floor(Math.random() * (4 - 0)) + 0;

      if(data['palabras']){

        this.verificationArray.push(data['palabras'][aleatorio].frase_1.Posicion);
        this.verificationArray.push(data['palabras'][aleatorio].frase_2.Posicion);
        this.verificationArray.push(data['palabras'][aleatorio].frase_3.Posicion);

        this.fraseArray.push(data['palabras'][aleatorio].frase_1.texto);
        this.fraseArray.push(data['palabras'][aleatorio].frase_2.texto);
        this.fraseArray.push(data['palabras'][aleatorio].frase_3.texto);

      }

    }).catch(err => {

      console.log(err);

    })

  }


}
