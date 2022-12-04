import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( public ui: UiService) {

  }
}
