// index.ts
let myName = "Maxwell";
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

nothingLiterally;

nothing;

//age = '林柏昇'

let messageToSend;

let canBeNullableString: string;
let myString = canBeNullableString;

canBeNullableString = "hello";

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = "assigned with ...";
absolutelyEitherNullOrString = null;

let info = {
  name: "Maxwell",
  age: 20,
  hasPet: false
};

let someone = {
  knows: undefined,
  identity: null
};

info.name = "Martin";
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;

//info.name = false;
info.age = null;
//info.hasPet = 'Doggie with Mustache';

someone.knows = "Nothing";
someone.identity = "John Snow";

console.log("999", info);

let nestedObject = {
  prop: "Hello",
  child: {
    prop1: 123,
    prop2: false
  }
};

let obj1 = { hello: "World" };
let obj2 = { ...obj1, goodbye: "Cruel World" };

let justAnObject: object = { hello: "World" };
justAnObject.hello = "Max";
justAnObject.hello = null;

justAnObject = { goodbye: "Cruel World" };

justAnObject.newProp = 123;

// function
let aSimpleFunction = function() {
  console.log("Hi!");
};

let numbers = [1, 2, 3, 4, 5];
let strings = ["我", "愛", "林柏昇"];

numbers[1] = 123;
numbers[3] = "123";

numbers.push(456);
numbers.push("456");

numbers.concat([789, 987]);
numbers.concat(["789", "987"]);

numbers = [666, 888, 999];
numbers = ["三位一體!", "您被聖靈附體!"];

let numberAndStrings = [
  1,
  "2",
  42,
  666,
  "Devils don't actually like to wear Prada!"
];

let objectsArray1 = [
  { message: "Hello" },
  { message: "Hi" },
  { message: "Goodbye" }
];


let objectsArray2 = [
  { message: "Hello" },
  { message: "Hi",revolt: true },
  { message: "Goodbye" }
];


let objectsArray3 = [
  { message: "Hello" },
  { message: 10100101110110 },
  { message: "Goodbye" }
];

let functionsArray = [
    function addition(num1: number,num2: number){return num1+num2},
    function subtraction(num1: number,num2: number){return num1-num2},
    function multiplication(num1: number,num2: number){return num1*num2},
    function division(num1: number,num2: number){return num1/num2},

]

