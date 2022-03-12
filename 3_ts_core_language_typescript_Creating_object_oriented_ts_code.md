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