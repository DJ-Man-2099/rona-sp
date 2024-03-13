import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerService {
  private audio = new Audio();

  preload(url: string) {
    this.audio.src = url;
    this.audio.load();
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}
