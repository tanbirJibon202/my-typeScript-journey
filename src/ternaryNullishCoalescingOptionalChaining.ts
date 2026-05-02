// ? : ternary operator
// ?? : nullish coalescing operator : null / undef
//  ?. : optional chaining operator

// ternary operator

const isAdult = (age: number) => {
  // if (age >= 18) {
  //   return "You are an adult.";
  // } else {
  //   return "You are a minor.";
  // }
  const result = age >= 21 ? "You are an adult." : "You are a minor.";
  console.log(result);
};
isAdult(20);

// const userTheme = undefined;
// const selectedTheme = userTheme ?? "Light Theme"
// console.log(selectedTheme);

// const userTheme = null;
// const selectedTheme = userTheme ?? "Light Theme";
// console.log(selectedTheme);

// const userTheme = "";
// const selectedTheme = userTheme ?? "Light Theme";
// console.log(selectedTheme);

const userTheme = "Green Theme";
const selectedTheme = userTheme ?? "Light Theme";
console.log(selectedTheme);

// const isAuthenticated = null;
// const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
// const resultWithNullishCoalescing = isAuthenticated ?? "You are guest !";
// console.log({ resultWithTernary }, { resultWithNullishCoalescing });

const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !";
const resultWithNullishCoalescing = isAuthenticated ?? "You are guest !";
console.log({ resultWithTernary }, { resultWithNullishCoalescing });

// optional chaining operator

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Gulshan",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
