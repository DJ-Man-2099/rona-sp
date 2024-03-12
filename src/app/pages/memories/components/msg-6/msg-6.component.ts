import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-6',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-6.component.html',
  styleUrls: ['./msg-6.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg6Component { }
