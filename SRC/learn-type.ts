let count: number = 34;
let myName: string = "Trishan";
let address: string = `${myName} stays in BD`;

let amIMad: boolean = false;

let x: any = true;

let multipleTypes: string | number = "Trisha";

multipleTypes = 30;

if (typeof myName === "string") {
  console.log("Yes this is a string");
} else {
  console.log("No this is not string");
}

class Car {
  name: string;
  constructor(input: string) {
    this.name = input;
  }
}

class Human {
  name: string;
  constructor(input: string) {
    this.name = input;
  }
}

const bmw = new Car("BMW Car");

if (bmw instanceof Human) {
  console.log("Yes");
} else {
  console.log("No");
}

let str: any = "I am string created with any";
let index: number = (str as string).indexOf("a");
let index1: number = (<String>str).indexOf("a");

let names: string[] = ["Trishan", "Rishan"];
let ages: Array<number> = [12, 14, 16];

// Multi type  array
let positions: (string | number)[] = [1, "first", "last", 100];

// Multi Dimentional Array
let multiDimArr: number[][] = [
  [1, 2, 3, 4, 5],
  [8, 9, 10],
];
