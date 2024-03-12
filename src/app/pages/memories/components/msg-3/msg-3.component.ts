import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-3',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-3.component.html',
  styleUrls: ['./msg-3.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg3Component { }
