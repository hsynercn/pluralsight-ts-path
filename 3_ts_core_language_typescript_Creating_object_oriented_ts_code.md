## 3. TypeScript: Getting Started
### 3.1. Course Overview

Object-oriented principles.

### 3.2. Introduction to Object-oriented Programming in TypeScript

**Overview**
- Introduction to Object-oriented TypeScript
- Classes and Object
- Inheritance and Abstraction
- Classes and Interfaces
- Summary

**The Role of Objects**
- Store state
- Pass state
- Group related functions
- Model real-world objects

 **Object Creation Techniques**
 - Constructor Function
 - Object Literal
 - Object.create()
 - Class (ES2015)

Go to /pluralsight-ts-path/course-projects/3_creating_object_oriented_ts_code/examples/object-oriented run "npm run webpack:w" in one terminal and "npm start" in another.

```ts
//object creation methods

//object literal
const objLiteral = {
    balance: 500
};

//class
class ClassObject {
    balance = 1000;
}
const classObj = new ClassObject();

//function
function FunctionObject() {
    this.balance = 9000;
}
const functionObj = new FunctionObject();

//Object.create()
const objCreate = Object.create(objLiteral);
```

**Object-oriented Concepts**

Object-oriented Programming (OOP): Programs are composed of objects which communicate with each other, which may be arranged into hierarchies, and which can be combined to form additional objects.


- Code reuse
- Faster development time frames
- Real-world mapping of objects
- Modular architecture
- More maintainable code base

Principles of Object-oriented Programming
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism


**Abstraction**
- Abstract complex functionality into an object that can be used as the base for other objects.

**Encapsulation**
- Objects provide public access points that can be used to interact with private members.

**Inheritance**
- Objects can share functionality from existing objects and create a family hierarchy.

**Polymorphism**
- Objects exhibit the same behavior but in a different way.

Summary
- JS/TS provides several ways to create objects
- JS is a type of object-oriented language based on prototype-based inheritance
- Key object-oriented concepts:
    - Abstraction
    - Encapsulation
    - Inheritance
    - Polymorphism

### 3.3. Classes and Objects

Overview
- Role of classes
- Creating a class
- Add members
- Create a class instance
- Constructor and properties
- Static members

**The Role of Classes**

Class acts as a blueprint for objects.

**Creating a Class**

Organizing Code
- Functional
    - Nested functions, still maintainable
- OOP
    - Classes, class members

Creating a Class
- Classes are supported in ES2015
- Created by using the class keyword
```ts
class Person {
    //class members
}
```

**Adding Class Members**
- Fields
- Properties
- Constructor
- Functions/Methods

```ts
class Person {
    firstName: string;
    lastName: string;
}
```
Access Modifiers:
**PRIVATE**: allows access within the same class.
**PROTECTED**: allows access within the same class and subclasses.
**PUBLIC**: allows access from any location.

By default, TS class members are **PUBLIC**.

Properties can be defined directly within a class. Term "method" is often used instead of "function" in TypeScript classes, does not use the "function" keyword.
```ts
export class Person {
    private _age: number;

    get age() {
        return this._age;
    }

    set age(value: number) {
        if(value > 0) {
            this._age = value;
        }
    }

    placeOrder(productId: number, quantity: number): void {
        //code
    }
}
```
**Creating a Class Instance**

We use export keyword for give class access for other modules/classes.

```ts
export class CheckingAccount {
    private _balance = 0; // field

    constructor(public title: string) { }

    get balance() { // get block
        return this._balance;
    }

    set balance(val: number) { // set block
        this._balance = val;
    }

    deposit(amount: number) { // function
        this.balance += amount;
    }

    withdrawal(amount: number) { // function
        this.balance -= amount;  
    }
}

let checkingAccount: CheckingAccount = new CheckingAccount('Check Me');
```

**Constructor and Properties**

Class Constructor
- A constructor constructs an object
- A constructor can map parameters to properties

Automatically generates property and maps it to parameter.
```ts
//Automatic properties
class Person {
    constructor(public firstName: string, public lastName: string) {}
}
```

<ins>**WE CAN'T OVERLOAD CONSTRUCTORS IN TYPESCRIPT.**</ins>

**Static Members**

In some cases we don't need a class instance, for example for utility classes we just need functionality, we don't need multiple instances.

```ts
export class Renderer {
    static render(text: string): void {
        console.log(`render: ${text}`);
    }
}
```

**Summary**
- Classes are used to create an object "blueprint"
- Class members can include:
    - Fields
    - Properties
    - Functions/Methods
    - Constructors
- Accessibility modifiers can be used for encapsulation (private/public)
- Object instances can be created using the new keyword

### 3.4. Inheritance and Abstraction

**Inheritance:**Objects can share functionality from existing objects and create a hierarchy.

**Abstraction:**Abstract complex functionality into an object that can be used as the base for other objects.

Overview
- Inheritance
- Inheriting from a class
- Abstract classes
- Create an abstract class
- Derive from an abstract class
- Override members

**The Role of Inheritance**

Reusing Code: Inheritance provides a way to reuse code across class in a family hierarchy.

**Inheriting from a Class**
- Classes can inherit/derive functionality from other classes.
- Use the extends keyword.
- A class can inherit from one class.

```ts
class BankAccount {
    constructor(id: number) {

    }
}
class CheckingAccount extends BankAccount {
    constructor(id: number) {
        super(id); //required
    }
}
```

If a base class has a constructor, and a child class has a constructor, the child class must make a call to super() (which is the base class).

```ts
export abstract class BankAccount {
    private _balance = 0;
    id: number;
    title: string;
    abstract accountType: AccountType;

    constructor(accountSettings: any) {
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }

    abstract getAccountInfo(): any;

    get balance() {
        return this._balance;
    }

    set balance(val: number) {
        if (val >= 0) {
            this._balance = val;
        }
        else {
            throw Error('Balance cannot be negative!');
        }
    }

}

export class CheckingAccount extends BankAccount {
    accountType = AccountType.Checking;  

    getAccountInfo() {
        return {

        };
    }
}
//we are using BankAccount constructor for thus class
let checkingAccount: CheckingAccount = new CheckingAccount({
    id: 1,
    title: 'Jane Doe Checking',
    balance: 5000
});
```

We can extend another class from bank account. If we have a constructor in child class, we need to call super constructor.

```ts
export class SavingsAccount extends BankAccount {
    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: any) {
        super(accountSettings);
        this._interestRate = accountSettings.interestRate;

        // Simulate interest over time
        setInterval(() => {
            this.addInterest();
        }, 60000);
    }

    getAccountInfo() {
        return {

        };
    }

    deposit(amount: number) {
        let newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    }

    private addInterest() {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }
}
```

**The Role of Abstract Classes**

**Abstraction:** Abstract complex functionality into an object that can be used as the base for other objects.

Why do I need an abstract class?

Why not just use a regular concrete class and go with that?

For our case abstract class is the right tool, we don't need a concrete class we just want to abstract functionality.

**Creating and Inheriting from an Abstract Class**
- An abstract class can be used as a foundation for other classes.
- Can define concrete members as well as abstract members.

```ts
abstract class BankAccount {
   //Abstract member (must be implemented by child)
   abstract accountType: AccountType;

   //Concrete member
   deposit() {
   }
}
```
Check previous code sample for abstract filed usage.

**Overriding Members**
- BankAccount: deposit
- SavingsAccount: deposit

SavingsAccount uses it's own method. Overrides parent method.

**Summary**
- Inheritance provides a way to promote reuse across objects in an application
- Use the extends keyword for inheritance
- Call super() in a child class constructor when the base/parent class has a constructor
- Abstract classes "abstract" functionality and serve as the foundation for other classes
- Create abstract classes and members by using the abstract keyword

### 3.5. Interfaces and Polymorphism

**Intro**

We can use interface to provide consistency between two unrelated object. A BankAccount and ATM class can implement same interface.

Classes can implement interfaces using the TypeScript implements keyword.
```ts
interface DepositWithdrawal {
    deposit(amount: number) {}
    withdrawal(amount: number) {}
}
class ATM implements DepositWithdrawal {
    deposit(amount: number) {}
    withdrawal(amount: number) {}
}
```

**Polymorphism:** Objects exhibit same behavior but in a different way.

Using Interfaces as Types: Interfaces can be used as types to define the "shape" of data held in a property or that is passed to function/method or constructor.

```ts
interface AccountInfo {
    routingNumber: number;
    bankNumber: number;
}
//accountInfo: AccountInfo;
```

**Summary**
- Interfaces are code contracts
- Key benefits of using interfaces include:
    - Drive consistency across multiple objects
    - Define the "shape" of data passes to constructor or function/method
    - Use as a custom data type
- Classes can implement an interface by using the implements keyword
- Abstract classes and interfaces can both be used to achieve polymorphic behavior


### 3.6. Putting It All Together

**Object Creation Techniques**
- Constructor Function
- Object Literal
- Object.create()
- Class

**Principles of Object-oriented Programming**
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

Pick the right tool for right job.