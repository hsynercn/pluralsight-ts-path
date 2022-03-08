export class Customer {
    constructor(name) {
        this.name = name;
        this.isActive = false;
    }
    announce() {
        return `Hello, my name is ${this.name}`;
    }
}
let firstCustomer = new Customer("Bob");
let message = firstCustomer.announce();
let webHeading = document.querySelector('h1');
webHeading.textContent = message;
