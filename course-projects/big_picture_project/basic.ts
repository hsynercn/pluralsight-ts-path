class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce() {
        return `Hello, my name is ${this.name}`;
    }
}

let firstCustomer: Customer = new Customer("Bob");
let message: string = firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent = message;