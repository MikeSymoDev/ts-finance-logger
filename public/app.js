import { Invoice } from './classes/invoice.js';
const invOne = new Invoice("mario", "work", 250);
const invTwo = new Invoice("luigi", "bananas", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// ----------------- DOM ------------------------- //
// const anchor = document.querySelector('a')!;
// // if(anchor) {
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
