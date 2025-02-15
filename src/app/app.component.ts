import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDebugModeOn = false;

  constructor() { }

  toggleDebugMode() {
    this.isDebugModeOn = !this.isDebugModeOn;
  }
}
