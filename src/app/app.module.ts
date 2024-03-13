import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoriesComponent } from "./pages/memories/memories.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import * as dotenv from 'dotenv';

dotenv.config();

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: process.env['API_KEY'] ?? environment.firebase.apiKey,
        authDomain:
          process.env['AUTH_DOMAIN'] ?? environment.firebase.authDomain,
        projectId: process.env['PROJECT_ID'] ?? environment.firebase.projectId,
        storageBucket:
          process.env['STORAGE_BUCKET'] ?? environment.firebase.storageBucket,
        messagingSenderId:
          process.env['MESSAGING_SENDER_ID'] ??
          environment.firebase.messagingSenderId,
        appId: process.env['APP_ID'] ?? environment.firebase.appId,
      })
    ),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    BrowserModule,
    AppRoutingModule,
    MemoriesComponent,
    BrowserAnimationsModule,
  ],
})
export class AppModule {}
