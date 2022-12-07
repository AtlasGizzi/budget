import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  constructor (public ui: UiService){}
}
