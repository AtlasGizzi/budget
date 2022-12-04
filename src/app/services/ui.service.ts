import { Injectable } from '@angular/core';

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
  constructor() { }

  public getShowHome(): boolean {
    return this.showHome
  }
}
