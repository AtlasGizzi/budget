import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  private name: string = ""
  constructor (public ui: UiService){}
}


