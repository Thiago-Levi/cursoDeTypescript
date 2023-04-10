const myName: string = "Thiago";
const myAge: number = 100;
const number = 10;
//arrays
let myNames: string[] = ["Thiago", "Levi", "Ramos", "da", "Costa"];
let myBooleans: boolean[] = [true, false, false];
let myStrings: string[] = ["Thiago", "Levi", "Ramos", "da", "Costa"];

//type any

let ortherNames: any[] = ["thiago", "diego", "chico", "pedro"];
ortherNames.push(100);
console.log(ortherNames);
let ortherNames2: any[] = [true, "diego", "chico", []];
ortherNames2.push(false);
console.log(ortherNames2);

//functions and types

function firstLetterUpperCase(name: string): string {
  const firstLetter = name[0].toUpperCase();
  const nameWithFirstLetterUpperCase = name.replace(name[0], firstLetter);
  return nameWithFirstLetterUpperCase;
}
//return and types
function sum(myNumber1: number, myNumber2: number): number {
  const sumNumbers = myNumber1 + myNumber2;
  return sumNumbers;
}

console.log(firstLetterUpperCase("levi"));

const names = ["nameA", "nameB", "nameC", "nameD", 10];
//Contextual Typing and inference type

//names.forEach((name) => console.log(name.toUpperCase()));

//types and objects

function resume(user: { name: string; age: number; school?: boolean }) {
  if (user.school) {
    return `Olá ${user.name}, tudo bem?. Você tem ${user.age} anos de idade. e está na escola`;
  } else {
    return `Olá ${user.name}, tudo bem?. Você tem ${user.age} anos de idade.`;
  }
}

const myUser = {
  name: "Levis",
  age: 35,
  //school:true
};
resume(myUser);

//union types

let userAge: number | string = 20;
userAge = "20";

function showAge(age: string | number) {
  return typeof age === "number" ? age++ : `${age}`;
}

//type and inteface

type UserTypeObj = {
  name: string;
  age: number;
  client: boolean;
  adress: {
    city: string;
    street: string;
  };
};

interface User {
  name: string;
  age: number;
}

function showObj(user: UserTypeObj) {
  user.name = "Thiago Levi";
}

//type assentions

const myH1 = document.querySelector("#h1") as HTMLInputElement;
console.log(myH1.textContent);
myH1.innerHTML += `<p>Test</p>`;

//types literals

type preferFoods = "pizza" | "hamburger";

function showPreferFood(myFood: preferFoods): preferFoods {
  return "hamburger";
}
type MyMethods = "GET" | "POST";
const myUrl: string = "www.xxxyyyy";

function requisition(method: MyMethods, myUrl: string) {}

requisition("GET", myUrl);

//type in functions

type MathOfTwoNumbers = (numberOne: number, numberTwo: number) => number;

const mltpl: MathOfTwoNumbers = (n1, n2) => {
  return n1 * n2;
};

const sbtrctn: MathOfTwoNumbers = (x1, x2) => {
  return x1 - x2;
};

// void return

function showAll(name: string) {
  console.log(name);
}

function removeElement(el: HTMLElement): void {
  el.remove();
}
