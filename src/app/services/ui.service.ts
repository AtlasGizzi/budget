import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showHome = true
  private showAccount = false
  private showBudget = false
  private id: number | undefined
  private username: string | undefined
  private account: string | undefined
  private balance: number | undefined
  private http: HttpClient

  constructor(http: HttpClient) {
    this.http = http
  }

  public getShowHome(): boolean {
    return this.showHome
  }

  //I'm trying to create a function that makes a new budget
  public createBudget(budget: string, amount: number) {
    this.Budgets = budget;
    console.log(budget)

  }
}
