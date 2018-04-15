import { Component, trigger, state, style, animate, transition } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';



@Component({
  selector: 'page-juego2',
  templateUrl: 'juego2.html',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ width: '0%' })),
      state('*', style({ width: '100%' })),
      transition('void <=> *', animate('600ms linear'))
    ])
  ]
})
export class Juego2Page {

  public element:string[] = [];
  public counter:number = 0;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  addTail(){

    if(this.counter >= 6){

      let toast = this.toastCtrl.create({
        message: 'No se permite encolar más elementos',
        duration: 2000
      });

      toast.present();

    }else{
      this.counter++;
      this.element.unshift("Elemento N° "+this.counter);
    }

  }

  removeTail(){

    if(this.counter <= 0){

      let toast = this.toastCtrl.create({
        message: 'No hay elementos por desencolar',
        duration: 2000
      });

      toast.present();

    }else{
      this.counter--;
      this.element.pop();
    }

  }


}