"use strict";
// ----------------- FUNCTION SIGNATURES ------------------------- //
// let greet: Function;
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// } 
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// let logDetails: (obj: {name: string, age: number}) => void;
// type person = {name: string, age: number};
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// ----------------- TYPE ALIASES ------------------------- //
// const logDetails = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: {name: string, uid: string | number}) => {
//   console.log(`${user.name} says hello`);
// }
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum}
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// }
// ----------------- FUNCTION BASICS ------------------------- //
// let greet = () => {
//   console.log('hello world');
// }
// let greet: Function;
// // greet = 'hello'
// greet = () => {
//   console.log('hello');
// }
// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b)
//   console.log(c)
// }
// const add2 = (a: number, b: number, c?: number | string) => {
//   console.log(a + b)
//   console.log(c)
// }
// add(5, 10);
// const minus = (a: number, b: number): number => {
//   return a + b;
// }
// let result = minus(10, 7);
// ----------------- ANY TYPE ------------------------- //
// let age: any;
// age = 25
// age = true
// console.log(age);
// age = 'hello'
// console.log(age);
// age = { name: 'luigi'};
// console.log(age)
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed)
// let ninja: { name: any, age: any};
// ninja = { name: 'yoshi', age: 25};
// console.log(ninja)
// ninja = { name: 25, age: 'mario'};
// console.log(ninja)
// ----------------- OBJECT EXPLICIT TYPES ------------------------- //
// let ninjaOne: object;
// ninjaOne = { name: 'mario', age: 30}
// let ninjaTwo: {
//   name: string,
//   age: number,
//   beltColor: string
// }
// ninjaTwo = { name: 'mario', age: 20, beltColor: 'black'}
// ----------------- UNION TYPES ------------------------- //
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello')
// mixed.push(20)
// mixed.push(false)
// console.log(mixed)
// let uid: string|number;
// uid = '123'
// uid= 123
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 23
// // isLoggedIn = 24
// isLoggedIn = true;
// let ninjas: string[];
// ninjas = ['yoshi', 'mario'];
// let toads: string[] = [];
// toads.push('champignions')
// ----------------- ARRAYS ------------------------- //
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');
// // names.push(3);
// // names[0] = 3;
// let numbers = [10, 20, 30, 40];
// numbers.push[25];
// // numbers[1] = 'shean'
// // numbers.push('manny')
// let mixed = ['ken', 4, 'barbie', 8, 9];
// mixed.push('ryu');
// mixed.push(3);
// mixed[0] = 3;
// ----------------- OBJECTS ------------------------- //
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// };
// ninja.age = 40;
// ninja.name = 'ryu';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'blue',
//   age: 34,
// }
// ----------------- TYPE BASICS ------------------------- //
// let character = 'mario';
// let age = 30;
// let isBlackBelt = false;
// // character = 20
// character = 'luigi';
// // age = 'yoshi'
// age = 40;
// const circ = (diamater: number) => {
//   return diamater * Math.PI
// }
// console.log(circ(7.5));
