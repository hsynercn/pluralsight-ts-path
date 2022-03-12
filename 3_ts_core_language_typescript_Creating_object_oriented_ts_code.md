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


