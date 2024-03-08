import { Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rona-sp';

  ngOnInit() {
    AOS.init();
  }

}
