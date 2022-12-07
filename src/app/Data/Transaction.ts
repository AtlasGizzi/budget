export class Transaction {
  destination: string
  amount: number | null
  budgetType: string

  constructor (destination: string, amount: number, budgetType: string)
  {
    this.destination = destination;
    this.amount = amount;
    this.budgetType = budgetType
  }
}
