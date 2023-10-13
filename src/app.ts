import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";



const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

let doc: HasFormatter;
if(type.value === 'invoice') {
  doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
} else {
  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
}
  console.log(doc);
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