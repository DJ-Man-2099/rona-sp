import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloadService {
  private cache: { [url: string]: Promise<HTMLImageElement> } = {};

  preload(url: string): Promise<HTMLImageElement> {
    if (!this.cache[url]) {
      this.cache[url] = new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = reject;
      });
    }
    return this.cache[url];
  }
}
