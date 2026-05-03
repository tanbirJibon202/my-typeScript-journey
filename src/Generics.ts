// dynamically generalize: Generics
// const friends : string[] = ['Alice', 'Bob', 'Charlie'];

type GenericArray<value> = Array<value>;
const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
const isElligibleList: GenericArray<boolean> = [true, false, true, true];

// const sqrFunc = (value : number) : number => value * value;
// console.log(sqrFunc(5));

// const sqrFunc = (value: number) =>{
//   return value * value;
// }
// sqrFunc(8);

type Cordinates<X, Y> = [X, Y];
const cordinates_1: Cordinates<string, string> = ["20", "30"];
const cordinates_2: Cordinates<number, number> = [20, 30];

type User = {
  name: string;
  age: number;
};
const userList: GenericArray<User> = [
  {
    name: "Alice",
    age: 25,
  },
  {
    name: "Bob",
    age: 30,
  },
];
