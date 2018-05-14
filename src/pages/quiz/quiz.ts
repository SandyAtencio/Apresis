import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { EvaluarProvider } from "../../providers/evaluar/evaluar";

import { InicioPage } from "../../pages/index.paginas";

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public pregunta:any[] = [];
  public respuestas:any[] = [];
  public rtaSeleccionada:any = {};
  public message:string = ""; 

  constructor(
    public navCtrl:         NavController, 
    public serviceEvaluar:  EvaluarProvider,
    public alertCtrl:       AlertController
  ) {
  }

  ionViewDidLoad() {
    this.serviceEvaluar.getDataEvaluar().then(data => {
      //console.log(data['Preguntas']);
      this.pregunta =  Object.keys( data['Preguntas'] ).map(e=>data['Preguntas'][e]); ;

      this.respuestas.push(this.pregunta[0].RespuestaCorrecta);
      this.respuestas.push(this.pregunta[1].RespuestaCorrecta);
 
    }).catch(error =>{
      console.log(error);
    })
  }

  validateQuestions(){

    if( this.rtaSeleccionada[0] != this.respuestas[0] && this.rtaSeleccionada[1] != this.respuestas[1]  ){
        this.message += "!Lo sentimos fallaste en las 2 preguntas, vuelve a intentarlo¡";
    }else  if( this.rtaSeleccionada[1] != this.respuestas[1]){
        this.message += "!Fallaste en la pregunta 2, vuelve a intentarlo¡";
    }else if( this.rtaSeleccionada[0] != this.respuestas[0] ){
        this.message += "!Fallaste en la pregunta 1, vuelve a intentarlo¡";
    }else{
      this.message += "!Felicitaciones preguntas constestadas correctamente¡"; 
    }

    let alert = this.alertCtrl.create({
        title: 'Apresis!',
        subTitle: this.message,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              this.navCtrl.setRoot(InicioPage);
            }
          },
          {
            text: 'De acuerdo',
            handler: () => {
              this.navCtrl.setRoot(QuizPage);
            }
          }
        ]
    });

    alert.present();
    
  }

}
