// oop : instance of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numberOfHours: number) {
    console.log(`${this.name} sleeps ${numberOfHours} hours every day`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOfHours: number) {
    console.log(`${this.name} studies every day ${numberOfHours} hours`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numberOfHours: number) {
    console.log(`${this.name} teaches for ${numberOfHours} hours every day`);
  }
}

// const getUserInfo = (user: Person) => {
//   if (user instanceof Student) {
//     user.doStudy(10);
//     console.log(user.name);
//   } else if (user instanceof Teacher) {
//     user.takeClass(6);
//     console.log(user.name);
//   } else {
//     user.getSleep(10);
//     console.log(user.name);
//   }
// };

// function guard
const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
    console.log(user.name);
  } else if (isTeacher(user)) {
    user.takeClass(6);
    console.log(user.name);
  } else {
    user.getSleep(10);
    console.log(user.name);
  }
};

// const student_1 = new Student("Tanbir");
// getUserInfo(student_1);
// const teacher_1 = new Teacher("Ahamed Jibon");
// getUserInfo(teacher_1);

const person_1 = new Person("Mr. Person");
getUserInfo(person_1);
