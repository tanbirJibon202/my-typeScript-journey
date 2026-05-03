// constraint : strict rules

type Student = {
  id: number;
  name: string;
  dateOfBirth: Date;
  class: string;
};
const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "TypeScript",
    ...studentInfo,
  };
};

const student1 = {
  id: 1,
  name: "John",
  dateOfBirth: new Date("1990-01-01"),
  class: "12th Grade",
};

const student2 = {
  id: 2,
  name: "Tanbir Ahamed",
  dateOfBirth: new Date("1992-05-15"),
  hasCar: true,
  isMarried: false,
  class: "11th Grade",
};

const student3 = {
  id: 3,
  name: "Alice",
  dateOfBirth: new Date("1995-10-20"),
  hasWatch: true,
  class: "10th Grade",
};

const enrolledStudent1 = addStudentToCourse(student1);
const enrolledStudent2 = addStudentToCourse(student2);
const enrolledStudent3 = addStudentToCourse(student3);
console.log(enrolledStudent1);
console.log(enrolledStudent2);
console.log(enrolledStudent3);
