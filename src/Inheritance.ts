// class Student {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   getSleep(numberOFHours: number) {
//     console.log(`${this.name} is sleeping ${numberOFHours} hours`);
//   }
// }
// const student_1 = new Student("Tanbir", 25, "Basabo");
// student_1.getSleep(10);

// class Teacher {
//   name: string;
//   age: number;
//   address: string;
//   designation: string;
//   constructor(name: string, age: number, address: string, designation: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation;
//   }
//   getSleep(numberOFHours: number) {
//     console.log(`${this.name} is sleeping ${numberOFHours} hours`);
//   }
//   takeClass(numberOFClass: number) {
//     console.log(`${this.name} is taking class ${numberOFClass} hours`);
//   }
// }
// const teacher_1 = new Teacher("Tanbir Ahamed Jibon", 25, "Bangladesh", "Senior Teacher");
// teacher_1.takeClass(6);

class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numberOFHours: number) {
    console.log(`${this.name} is sleeping ${numberOFHours} hours`);
  }
}

class Student extends Person {
  rollNumber: number;
  constructor(name: string, age: number, address: string, rollNumber: number) {
    super(name, age, address);
    this.rollNumber = rollNumber;
  }
}
const student_1 = new Student("Tanbir Ahamed Jibon", 25, "Basabo", 1);
student_1.getSleep(10);
console.log(student_1.rollNumber);

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numberOFClass: number) {
    console.log(`${this.name} is taking class ${numberOFClass} hours`);
  }
}

const teacher_1 = new Teacher(
  "Tanbir Ahamed Jibon",
  25,
  "Bangladesh",
  "Senior Teacher",
);
teacher_1.takeClass(6);
