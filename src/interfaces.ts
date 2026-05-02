// type User = {
//   name: string;
//   age: number;
// }

// type Role ={
//   role: "admin" | "user"
// }

// type UserWithRole = User & Role;

// const user_1 : UserWithRole = {
//   name: "Tanbir Ahamed",
//   age: 25,
//   role: "admin"
// }

// const user_2 : User = {
//   name: "Ahamed Jibom",
//   age: 24,
// }

// type User = {
//   name: string;
//   age: number;
// }

// interface : object type: array, function, object

// interface IUser {
//   name: string;
//   age: number;
// }

// type Role ={
//   role: "admin" | "user"
// }

// type UserWithRole = User & Role;

// const user_1 : UserWithRole = {
//   name: "Tanbir Ahamed",
//   age: 25,
//   role: "admin"
// }

// const user_2 : IUser = {
//   name: "Ahamed Jibom",
//   age: 24,
// }

type Isadmin = boolean;
const isAdmin: Isadmin = false;

// type User = {
//   name: string;
//   age: number;
// }
// interface IUser {
//   name: string;
//   age: number;
// }

// type Role ={
//   role: "admin" | "user"
// }

// type UserWithRole = User & Role;

// interface IUserWithRole extends IUser {
//   role: "admin" | "user"
// }

// const user_1 : IUserWithRole = {
//   name: "Tanbir Ahamed",
//   age: 25,
//   role: "admin"
// }

// const user_2 : IUser = {
//   name: "Ahamed Jibom",
//   age: 24,
// }

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => {
  return num1 + num2;
};

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["Tanbir", "Ahamed", "Jibom"];
