// keyof : type operator

// type richPeoplesVehicle = {
//   car: string;
//   bike: string;
//   cng: string;
// ship: string
// };

// type myVehicle_1 = "bike" | "car" | "cng";
// type myVehicle_2 = keyof richPeoplesVehicle;
// const myVehicle: myVehicle_2 = "ship";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 1,
  name: "Tanbir",
  address: {
    city: "Chittagong",
  },
};
// const myName = user.name;
// const myName = user['name'];
// const myId = user.id;
// const myId = user['id'];
// const address = user["address"];
// console.log({myId,myName,address});
const getPropertyFromObj = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
// const result = getPropertyFromObj(user, "name");
// console.log(result);
const product = {
  brand: "HP",
};
const student = {
  id: 2,
  class: "four"
}
const result_2 = getPropertyFromObj(product, "brand");


const result_3 = getPropertyFromObj(student, "id");
console.log(result_3)
