//  access modify

class bankAccount {
  readonly userId: number;
  public userName: string;
  // private userBalance: number;
  protected userBalance: number;


  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }
}



class studentBankAccount extends bankAccount{
      test(){
        this.addBalance
      }
}





const tanbirBhaiAccount = new bankAccount(1, "Tanbir Ahamed", 50000);
console.log(tanbirBhaiAccount.userId);

console.log(tanbirBhaiAccount.addBalance(10000));
console.log(tanbirBhaiAccount.addBalance(20000));
