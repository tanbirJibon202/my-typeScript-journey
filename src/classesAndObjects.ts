// oop - class - object
// class Animal {
//   name: string;
//   species: string;
//   sound: string;

//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound(){
//     console.log(`${this.name} is making ${this.sound}`);
//   }
// }
// const dog = new Animal("Tommy", "Dog", "Bark");
// console.log(dog.name, dog.sound, dog.species);
// const cat = new Animal("Kitty", "Cat", "Meow");
// console.log(cat.name,cat.species, cat.sound);
// dog.makeSound();
// cat.makeSound();

// function add (num1: number, num2: number){

// }
// add(2,3);

// parameter properties

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}
  makeSound() {
    console.log(`${this.name} is making ${this.sound}`);
  }
}
const dog = new Animal("Tommy", "Dog", "Bark");
console.log(dog.name, dog.sound, dog.species);
dog.makeSound();

const cat = new Animal("Kitty", "Cat", "Meow");
console.log(cat.name, cat.species, cat.sound);
cat.makeSound();
