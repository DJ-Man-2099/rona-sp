import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Aos from 'aos';
import { PhotoMemoryComponent } from './components/photo-memory/photo-memory.component';
import { Msg1Component } from './components/msg-1/msg-1.component';
import { Msg2Component } from './components/msg-2/msg-2.component';
import { Msg3Component } from './components/msg-3/msg-3.component';
import { Msg4Component } from './components/msg-4/msg-4.component';
import { Msg5Component } from './components/msg-5/msg-5.component';
import { Msg6Component } from './components/msg-6/msg-6.component';

@Component({
  selector: 'app-memories',
  standalone: true,
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ngOnInit() {
    Aos.init({
      disable: false,
      mirror: true,
    });
  }
}
