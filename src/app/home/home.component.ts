import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (public ui: UiService){
    //ui.$showCreateBudget.subscribe(showCreateBudget => this.showCreateBudget = showCreateBudget)
  }
}
