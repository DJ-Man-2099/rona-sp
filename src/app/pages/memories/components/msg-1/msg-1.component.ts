import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-1.component.html',
  styleUrls: ['./msg-1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg1Component { }
