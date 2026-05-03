// Generic Functions

// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithObject = (value: { id: number; name: string }) => {
//   return [value];
// };

// const createArrayWithGeneric = <T>(value: T) => {
//   return [value];
// };
// const arrString = createArrayWithGeneric("Apple");
// const arrNumber = createArrayWithGeneric(222);
// const arrObject = createArrayWithGeneric({ id: 1, name: "John" });


// tupple
// const createArrayWithTuple = (param1: string, param2: number) => [param1, param2];

// const createArrayTupleWithGeneric = <T1, T2>(param1: T1, param2: T2) => [param1, param2];
// const res1 = createArrayTupleWithGeneric("Apple", false);
// const res2 = createArrayTupleWithGeneric({ id: 1, name: "John" }, [1, 2, 3]);


const addStudentToCourse = <T>(studentInfo: T) => {
     return {
        course: "TypeScript",
        ...studentInfo,
     };
};
const student1 = {
  id: 1,
  name: "John",
  hasPen: true,
};
const student2 = {
  id: 2,
  name: "Tanbir Ahamed",
  hasCar: true,
  isMarried: false,
};

const enrolledStudent1 = addStudentToCourse(student1);
const enrolledStudent2 = addStudentToCourse(student2);
console.log(enrolledStudent1);
console.log(enrolledStudent2);

