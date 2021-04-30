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

let addition = function(param1: any , param2: any){
    return param1+param2;
}

let shouldBeString: string = addition(123 , 456);

console.log('456',shouldBeString);



