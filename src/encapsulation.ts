class bankAccount {
  readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }

  getBalance() {
    return this.userBalance;
  }
}

class StudentBankAccount extends bankAccount {
  
}

const student = new StudentBankAccount(1, "Tanbir", 50000);
student.callHiddenMethod(10000);
student.callHiddenMethod(100);
student.callHiddenMethod(100);
console.log(student.getBalance());
