// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let info = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};

console.log('999',info);

let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
  goodbye: 'Cruel World'
});

console.log('000',obj4);

let addition = function(param1: number , param2: number) :number{
    return param1+param2;
}

let shouldBeString: string = addition(123 , 456);

console.log('456',shouldBeString);

//addition.bind = function

let numbers = [1,2,3,4,5];
let mappedNumbers = numbers.map(num => num*2);

console.log('100',mappedNumbers);


const randomNumber = Math.random()*10;
let probablyExecutesForever  = function(num:number){
     while(num >5){

     }
};

//console.log("這個數字是",probablyExecutesForever(randomNumber));
//console.log("答案是",probablyExecutesForever(6));








