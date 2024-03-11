import {
  trigger,
  state,
  style,
  transition,
  animate,
  sequence,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-photo-memory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-memory.component.html',
  styleUrls: ['./photo-memory.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(0)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition(
        'active => inactive',
        sequence([
          animate('250ms ease-out', style({ transform: 'rotateY(90deg)' })),
          animate('250ms ease-in', style({ transform: 'rotateY(0)' })),
        ])
      ),
      transition(
        'inactive => active',
        sequence([
          animate('250ms ease-out', style({ transform: 'rotateY(90deg)' })),
          animate('250ms ease-in', style({ transform: 'rotateY(0)' })),
        ])
      ),
    ]),
  ],
})
export class PhotoMemoryComponent {
  @Input()
  photo!: string;

  @Input()
  text!: string;

  flip: string = 'inactive';
  front: boolean = true;
  constructor(@Inject(ChangeDetectorRef) private cd: ChangeDetectorRef) {}

  click() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
    setTimeout(() => {
      this.front = !this.front;
      this.cd.detectChanges();
    }, 250);
  }
}
