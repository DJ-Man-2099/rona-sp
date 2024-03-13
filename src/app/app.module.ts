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

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    provideFirebaseApp(() =>
      initializeApp({
        apiKey:  environment.firebase.apiKey,
        authDomain:
           environment.firebase.authDomain,
        projectId:  environment.firebase.projectId,
        storageBucket: environment.firebase.storageBucket,
        messagingSenderId:
          environment.firebase.messagingSenderId,
        appId: environment.firebase.appId,
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
