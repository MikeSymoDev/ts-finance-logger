import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // let doc: HasFormatter;
    // if(type.value === 'invoice') {
    //   doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    // } else {
    //   doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    // }
    // list.render(doc, type.value, 'end');
    // });
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// ----------------- DOM ------------------------- //
// const anchor = document.querySelector('a')!;
// // if(anchor) {
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// ----------------- INTERFACES ------------------------- //
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'mario',
//   age: 30,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount);
//     return amount;
//     },
//   };
// const greetPerson = (person: IsPerson) => {
//   console.log('hello', person.name);
// }
// greetPerson(me);
//   console.log(me);
// ----------------- INTERFACES WITH CLASSES ------------------------- //
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'webwork', 250)
// docTwo = new Payment('mario', 'pluming', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice("mario", "work", 250);
// const invTwo = new Invoice("luigi", "bananas", 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// ----------------- GENERICS ------------------------- //
// const addUID = <T extends {name: string}>(obj: T) => {
//   let uid =Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// // let docTwo = addUID('hello')
// console.log(docOne.name);
// with Interfaces ----- //
// interface Resource<T> {
//   uid: number,
//   resourceName: string,
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppinglist',
//   data: ['test', 'milk']
// }
// console.log(docThree, docFour);
// ----------------- ENUMS ------------------------- //
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//   uid: number,
//   resourceType: ResourceType,
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.DIRECTOR,
//   data: {title: 'shaun'}
// }
// const docTwo: Resource<object> = {
//   uid: 2,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'yoshi'}
// }
// console.log(docOne, docTwo)
// ----------------- TUPLES ------------------------- //
// let arr = ['mario', 3, true];
// let tup: [string, number, boolean] = ['mario', 14, false]
// tup[0] = 'ken';
// tup[1] = 34;
// let student: [string, number];
// student =  ['yoshi', 345];
