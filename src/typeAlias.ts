type User = {
  id: number;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  Gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};


const user1: User = {
  id: 123,
  name: {
    firstName: "Tanbir",
    middleName: "Ahamed",
    lastName: "Jibon",
  },
  Gender: "male",
  contactNo: "01711111111",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};


const user2: User = {
  id: 456,
  name: {
    firstName: "F",
    middleName: "A",
    lastName: "I",
  },
  Gender: "female",
  contactNo: "01911111111",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};



type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Tanbir Ahamed Jibon";


// fuction type alias
type AddFunction = (num1: number, num2: number) => number;
const add: AddFunction = (num1, num2) => num1 + num2;
