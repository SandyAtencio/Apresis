import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EvaluarProvider } from "../../providers/evaluar/evaluar";

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public pregunta:any[] = [];
  public respuestas:any[] = [];
  public rtaSeleccionada:any = {};
  public message:string = ""; 

  constructor(public navCtrl: NavController, public serviceEvaluar: EvaluarProvider) {
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

    if( this.rtaSeleccionada[0] != this.respuestas[0] ){
      this.message += "Primer pregunta incorrecta, ";
    }
    
    if( this.rtaSeleccionada[1] != this.respuestas[1]){
      this.message += "Segunda pregunta incorrecta";
    }else{
      this.message += "!Felicitaciones preguntas constestadas correctamente¡";
    }

    console.log(this.message)

  }

}
