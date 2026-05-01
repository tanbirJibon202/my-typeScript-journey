// function

// arow function, normal function

function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addArrow(2, 2);

// object => function => method

const poorUser = {
  name: "tanbir",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(10000);

const arr: number[] = [1, 2, 3, 4, 5];

const squArray = arr.map((elem: number): number => elem * elem);
console.log(squArray);

