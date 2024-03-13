import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import * as Aos from 'aos';
import { PhotoMemoryComponent } from './components/photo-memory/photo-memory.component';
import { Msg1Component } from './components/msg-1/msg-1.component';
import { Msg2Component } from './components/msg-2/msg-2.component';
import { Msg3Component } from './components/msg-3/msg-3.component';
import { Msg4Component } from './components/msg-4/msg-4.component';
import { Msg5Component } from './components/msg-5/msg-5.component';
import { Msg6Component } from './components/msg-6/msg-6.component';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
// import { env } from 'process';
import { environment } from 'src/environments/environment';
import { ImagePreloadService } from './services/image-loader.service';
import { MusicPlayerService } from './services/music-player.service';

@Component({
  selector: 'app-memories',
  standalone: true,
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css'],
  imports: [
    CommonModule,
    PhotoMemoryComponent,
    Msg1Component,
    Msg2Component,
    Msg3Component,
    Msg4Component,
    Msg5Component,
    Msg6Component,
  ],
})
export class MemoriesComponent {
  private changeRef: ChangeDetectorRef = inject(ChangeDetectorRef);
  private imageLoad: ImagePreloadService = inject(ImagePreloadService);
  private musicLoad: MusicPlayerService = inject(MusicPlayerService);
  private storage: Storage = inject(Storage);
  private auth: Auth = inject(Auth);
  private list: string[] = [
    'first.png',
    'second.png',
    'third.png',
    'fourth.png',
    'final.png',
    'finalfinal.jpg',
  ];
  public isLoaded: boolean = false;
  public isClicked: boolean = false;
  public images: string[] = [];

  ngOnInit() {
    Aos.init({
      disable: false,
      mirror: true,
    });
    this.loadImages();
  }

  private async loadImages() {
    const cred = await signInWithEmailAndPassword(
      this.auth,
      /* env['username'] ?? */ environment.user.username,
      /* env['password'] ?? */ environment.user.password
    );
    console.log(cred);
    for (const image of this.list) {
      const storageRef = ref(this.storage, `/assets/images/${image}`);
      const url = await getDownloadURL(storageRef);
      await this.imageLoad.preload(url);
      this.images.push(url);
    }
    this.isLoaded = true;
    console.log(this.isLoaded, this.isClicked);
    if (this.isClicked) {
      this.changeRef.detectChanges();
      this.musicLoad.play('/assets/sounds/sound.mp3');
    }
  }

  click() {
    this.isClicked = true;
    console.log(this.isLoaded, this.isClicked);
    if (this.isLoaded) {
      this.changeRef.detectChanges();
      this.musicLoad.play('/assets/sounds/sound.mp3');
    }
  }
}
