export class Expences {
  destination: string
  price: number | null
  budgetType: string

  constructor (destination: string, price: number, budgetType: string)
  {
    this.destination = destination;
    this.price = price;
    this.budgetType = budgetType
  }
}
