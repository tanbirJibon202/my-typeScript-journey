// class Counter {
//   static count: number = 0;
//   increment() {
//     return (Counter.count = Counter.count + 1);
//   }
//   decrement() {
//     return (Counter.count = Counter.count - 1);
//   }
// }

// const instance_1 = new Counter();
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// const instance_2 = new Counter();
// console.log(instance_2.increment());
// console.log(instance_2.increment());
// console.log(instance_2.increment());
// const instance_3 = new Counter();
// console.log(instance_3.increment());
// console.log(instance_3.decrement());
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// console.log(instance_1.increment());
// console.log(instance_1.increment());

class Counter {
  static count: number = 0;
  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
