import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicPlayerService {
  private audio = new Audio();

  play(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}
