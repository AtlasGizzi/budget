
export class Budget {

  name: string
  weeklyBudget: number | null

  constructor (name: string, weeklyBudget: number | null) {
    this.name = name;
    this.weeklyBudget = weeklyBudget;
  }
}
