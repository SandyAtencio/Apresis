import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule  } from '@angular/common/http';

import { MyApp } from './app.component';
import { InicioPage, AprenderPage, PracticarPage, QuizPage, PilasPage, ColasPage, Juego1Page, Juego2Page } from "../pages/index.paginas";

/*Providers*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AprenderProvider } from '../providers/aprender/aprender';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    AprenderPage,
    PracticarPage,
    QuizPage,
    PilasPage,
    ColasPage,
    Juego1Page,
    Juego2Page
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    AprenderPage,
    PracticarPage,
    QuizPage,
    PilasPage,
    ColasPage,
    Juego1Page,
    Juego2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AprenderProvider
  ]
})
export class AppModule {}
