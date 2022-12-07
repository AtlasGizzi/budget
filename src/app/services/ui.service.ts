import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Budget } from '../Data/Budget';
import { Observable, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showHome = true
  private showAccount = false
  private showCreateBudget = false
  private showTransactions = false
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
  public getShowCreateBudget (): boolean {
    return this.showCreateBudget
  }
  public getShowAccount(): boolean {
    return this.showAccount
  }
  public getShowTransactions(): boolean {
    return this.showTransactions
  }

  public setShowCreateBudget (): void {
    this.showCreateBudget = true
    this.showHome = false
    this.showTransactions = false
    this.showAccount = false
  }
  public setShowAccount (): void {
    this.showAccount = true
    this.showHome = false
    this.showCreateBudget = false
    this.showTransactions = false
  }
  public setShowTransactions (): void {
    this.showTransactions = true
    this.showHome = false
    this.showAccount = false
    this.showCreateBudget = false
  }
  public setShowHome (): void {
    this.showHome = true
    this.showAccount = false
    this.showCreateBudget = false
    this.showTransactions = false

  }
  createBudget (name: string, amount: number | null) 
  {
    const budget = {
      name:name,
      amount:amount,
      id: Math.random()
    }
    //call post request here
    this.addBudget(budget)
  }
  //create post request here
  addBudget (budget:Budget){
    this.http.post<Budget>("http://localhost:3000/budgets", budget)
    .pipe(take(1))
    .subscribe({next:(budget)=>{
      
    }})
  }
}
