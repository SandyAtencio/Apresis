import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage, AprenderPage, PracticarPage, QuizPage } from "../pages/index.paginas";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  aprender: any = AprenderPage;
  practicar: any = PracticarPage;
  quiz: any = QuizPage;

  rootPage: any = InicioPage;

  paginas: Array<{title: string, component: any, icono: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.paginas = [
      { title: 'Inicio', component: InicioPage, icono: 'home' },
      { title: 'Aprender', component: AprenderPage, icono: 'book' },
      { title: 'Practicar', component: PracticarPage, icono: 'create' },
      { title: 'Quiz', component: QuizPage, icono: 'bulb' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  abrirPagina(pagina) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pagina.component);
  }
}
