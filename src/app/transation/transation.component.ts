import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';
@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent {
  constructor (public ui: UiService) {}
}
