import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Aos from 'aos';
import { PhotoMemoryComponent } from "./components/photo-memory/photo-memory.component";
import { Msg1Component } from "./components/msg-1/msg-1.component";

@Component({
    selector: 'app-memories',
    standalone: true,
    templateUrl: './memories.component.html',
    styleUrls: ['./memories.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, PhotoMemoryComponent, Msg1Component]
})
export class MemoriesComponent {
  ngOnInit() {
    Aos.init({
      disable: false,
      mirror: true,
    });
  }
}
