import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule  } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { InicioPage, AprenderPage, PracticarPage, QuizPage, PilasPage, ColasPage, Juego1Page, Juego2Page, Juego3Page } from "../pages/index.paginas";

/*Providers*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AprenderProvider } from '../providers/aprender/aprender';
import { PracticarProvider } from '../providers/practicar/practicar';
import { EvaluarProvider } from '../providers/evaluar/evaluar';

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
    Juego2Page,
    Juego3Page
  ],
  imports: [
    HttpClientModule ,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    Juego2Page, 
    Juego3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AprenderProvider,
    PracticarProvider,
    EvaluarProvider
  ]
})
export class AppModule {}
