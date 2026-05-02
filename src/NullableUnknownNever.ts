// nullable types

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: ALL USER");
  }
};
getUser(null);

// unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(`Discount: ${discountPrice}`);
  } else if (typeof input === "string") {
    // const splittedInput = input.split(" ");
    // console.log(splittedInput);
    //  console.log(`Splitted Input: ${splittedInput}`);
    const [discountedPrice] = input.split(" ");
    console.log(`Discount: ${Number(discountedPrice) * 0.1}`);
  } else {
    console.log("Wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

// void 

const throwError = (msg: string): never => {
  throw new Error(msg);
}
throwError("This is an error");