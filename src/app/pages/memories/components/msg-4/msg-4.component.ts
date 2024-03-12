import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-4',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-4.component.html',
  styleUrls: ['./msg-4.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg4Component { }
