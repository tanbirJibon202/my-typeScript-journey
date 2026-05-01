// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: "Tanbir",
    middleName: "Ahamed",
    lastName: 'Jibon'
  },
  gender: "Male",
  favouriteColor: "Black",
}

// const myFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

// const {favouriteColor, name: { middleName : myMiddleName}} = user
// console.log(favouriteColor);
// console.log(myMiddleName);

const friends = ["karim", "Rahim", "Mahim"];

// const myBestFriend = friends[0];
// console.log(myBestFriend);

// const [A, myBestFriend, C] = friends;
// const [, myBestFriend, ] = friends;
// const [, myBestFriend] = friends;
const [, , myBestFriend] = friends;
console.log(myBestFriend);



