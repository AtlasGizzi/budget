//export Users
export class Account {
  type: string
  bankAccount: string
  accountBalance: number | null

constructor(type: string, bankAccount: string, accountBalance: number){
  this.type = type;
  this.bankAccount = bankAccount;
  this.accountBalance = accountBalance;
}
}
