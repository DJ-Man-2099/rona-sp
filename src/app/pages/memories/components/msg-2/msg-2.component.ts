import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-2',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-2.component.html',
  styleUrls: ['./msg-2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg2Component { }
