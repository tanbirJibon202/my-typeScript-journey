// class bankAccount {
//   readonly userId: number;
//   public userName: string;
//   protected userBalance: number;

//   constructor(userId: number, userName: string, userBalance: number) {
//     this.userId = userId;
//     this.userName = userName;
//     this.userBalance = userBalance;
//   }
//   addBalance(balance: number) {
//     return this.userBalance += balance;
//   }

//   getBalance() {
//     return this.userBalance;
//   }
// }
// const tanbirBhaiAccount = new bankAccount(1, "Tanbir Ahamed", 100);
// tanbirBhaiAccount.addBalance(10000);
// tanbirBhaiAccount.addBalance(60);
// console.log("Final Balance:", tanbirBhaiAccount.getBalance());

class bankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  set addBalance(amount: number) {
    this.userBalance += amount;
  }
  get getBalance() {
    return this.userBalance;
  }
}
const tanbirBhaiAccount = new bankAccount(1, "Tanbir Ahamed", 100);

tanbirBhaiAccount.addBalance = 100;
tanbirBhaiAccount.addBalance = 60;
console.log(tanbirBhaiAccount.getBalance);
console.log(tanbirBhaiAccount);
