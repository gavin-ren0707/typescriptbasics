
// index.ts
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

nothingLiterally

nothing

//age = '林柏昇'

let messageToSend

let canBeNullableString: string;
let myString = canBeNullableString;

canBeNullableString = 'hello';

let absolutelyEitherNullOrString: string | null = null;

absolutelyEitherNullOrString = 'assigned with ...'
absolutelyEitherNullOrString = null;

let info = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};

let someone = {
  knows: undefined,
  identity: null
};

info.name = 'Martin';
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;

//info.name = false;
info.age = null;
//info.hasPet = 'Doggie with Mustache';

someone.knows = 'Nothing';
someone.identity = 'John Snow';

console.log('999',info);


let nestedObject = {
  prop: 'Hello',
  child: {
    prop1: 123,
    prop2: false
  }
};

let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

let justAnObject: object = {hello: 'World'};
justAnObject.hello = 'Max';
justAnObject.hello = null;

justAnObject = {goodbye: 'Cruel World'};

justAnObject.newProp = 123;

// function
let aSimpleFunction = function() { console.log('Hi!'); };
