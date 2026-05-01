// spread operator

const friends = ["Alice", "Bob", "Charlie"];
const moreFriends = ["David", "Eve"];
const allFriends = [...friends, ...moreFriends];  
console.log(allFriends); // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]

const user ={
  name: 'John', phone: '123-456-7890'
};

const updatedUser = {
  email: 'john@example.com',
  favouriteColor: 'Black',
};

const mergedUser = { ...user, ...updatedUser };
console.log(mergedUser); 
// Output: { name: 'John', phone: '123-456-7890', email: '

// rest operator

// const sendInvite = (friend1: string, friend2: string, friend3: string)=>{
//   console.log(`Inviting ${friend1}, ${friend2}, and ${friend3} to the party!`);
// }

const sendInvite = (...friends: string[])=>{
  friends.forEach((friend: string) => console.log(`Inviting ${friend} to the party!`));
}
sendInvite("Alice", "Bob", "Charlie", "tanbir", "mezbah");

