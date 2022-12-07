
export class Budget {

  name: string
  amount: number | null
  id: number | null

  constructor (name: string, amount: number | null, id: number | null) {
    this.name = name;
    this.amount = amount;
    this.id = id;
  }
}
