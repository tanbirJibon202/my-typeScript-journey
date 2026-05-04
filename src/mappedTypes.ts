// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

// const user = {
//   id: 1,
// }

// user['id']

type AreaOfNumber = {
  height: number;
  width: number;
};

// type height = AreaOfNumber['height']

// type AreaOfString ={
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in "height" | "width"] : string;
// }

// type AreaOfString = {
//   [key in "height" | "width"] : boolean;
// };

// type AreaOfString = {
//   [key in keyof AreaOfNumber] : boolean;
// };

// type Area<T> = {
//   [key in keyof T] : boolean;
// };

type Area<T> = {
  [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width  >> number
};

/*
T >>>pure object -> { height: string; width: number }

T['height']: string
T['width']: number

*/
// "height" | "width"

// const area_1: Area<{ height: string; width: number }> = {
//   height: "50",
//   width: 40,
// };

const area_1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};
