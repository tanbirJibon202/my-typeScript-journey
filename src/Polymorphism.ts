class Person {
  getSleep() {
    console.log(`I'm a Normal Happy Person. I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep(): void {
    console.log(`I'm a student. I sleep 7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep(): void {
    console.log(`I'm a Next Level Developer. I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};
const person_1 = new Person();
const person_2 = new Student();
const person_3 = new NextLevelDeveloper();

// getSleepingHours(person_1);
// getSleepingHours(person_2);
// getSleepingHours(person_3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
  console.log(param.getArea());
};

const shape_1 = new Shape();
const shape_2 = new Circle(10);
const shape_3 = new Rectangle(10, 20);
getArea(shape_1);
getArea(shape_2);
getArea(shape_3);
