import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-msg-5',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './msg-5.component.html',
  styleUrls: ['./msg-5.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Msg5Component { }
