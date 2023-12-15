import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDsvY0xx_TtTV-t57QjX96vWTvN2S-TFoY",
  authDomain: "login-f267c.firebaseapp.com",
  databaseURL: "https://login-f267c-default-rtdb.firebaseio.com",
  projectId: "login-f267c",
  storageBucket: "login-f267c.appspot.com",
  messagingSenderId: "830826757618",
  appId: "1:830826757618:web:3926937a926bc36ea0bf6b"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),    
  importProvidersFrom(
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ) ]
};
