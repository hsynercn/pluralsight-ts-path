## 2. TypeScript: Getting Started
### 2.1. Course Overview

TS is a super set of JS.

Course scope:
- Configuring a TypeScript project
- using types and functions
- classes and interfaces
- Modules
- Type declaration files

### 2.2. Installing TypeScript and Configuring a Project

Course repo https://github.com/bricewilson/TypeScript-Getting-Started.

Overview
- Course overview
    - Taking advantages of built-in types
    - Writing better functions with TypeScript
    - Creating and using custom types
    - Creating and consuming modules
    - Being more productive with type declaration files
- MultiMath demo
- Installing TS
- Running the compiler
- Configure project with tsconfig.json

**Demo: Project Overview**

Install node and npm and install typescript, "npm install -g typescript".

Download template project.

Run 'npm install'.

```ts
function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome th MultiMath! Starting new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
```

We can compile file with 'tsc app.ts' and go back to root project folder and start dev server with 'npm start'.


**Using Project Files**
- Simple JSON text file named tsconfig.json
- Stores compiler options used with the project
- Specifies files to be included or excluded in compilation
- Supports configuration inheritance

We can initialize tsconfig.json with "tsc --init" command.

**Non-Null Assertion Operator**: The post-fix expression operator ! may be used to assert that its operand cannot be null or undefined during runtime.

We can add **watch** parameter to compile continuously.

**Demo: Configuring Inheritance and Glob Support in tsconfig.json**

**Demo**
- Configuration inheritance and glob support in tsconfig.json.

In a project we may need multiple tsconfig files for different modules. We can use a parent tsconfig.base.json and extend other configurations from this file.

**Demo: Compiling with Webpack**

With this webpack configuration 

```js
module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true
  }
};
```

and this package.json when we run **"npm start"** we compile ts files and webpack them. 'ts-loader' will compile the TypeScript, webpack will bundle the output JavaScript and start the development server.

```json
{
  "name": "multimath",
  "version": "4.0.0",
  "description": "Simple math game built with TypeScript.",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve"
  },
  "author": "Brice Wilson",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "8.0.17",
    "typescript": "4.2.2",
    "webpack": "5.22.0",
    "webpack-cli": "4.5.0",
    "webpack-dev-server": "3.11.2"
  }
}
```

### 2.3. Taking Advantage of Built-in Types

**Overview**
- Built-in TypeScript types
- Declarations with **let** and **const**
- Type annotations and type inference
- Managing null and undefined
- Control flow-based type analysis

**Basic Types and Variable Declarations**

Basic TypeScript Types
- Boolean
- Number
- String
- Array
- Enum

Declarations with **let** and **const**

This is a valid declaration in JavaScript, because of **hoisting** all var declarations are carried to top.
```js
console.log(myString);
var myString = 'Hello';
```

This is the recommended way:

```js
let myString = 'Hello';
const myValue = 2;
```

**Type Annotations and Type Inference**

```ts
let x: string = 'test string';
x = 12; //Compiler error

let y = 'test string';
y = 12; //Compiler error

let z = GetSomeVariable(); //OK
let w: number = GetSomeVariable(); //OK, better
```

Be consistent in a project.

**Additional Built-in Types**
- Void: Represents absence of a type.
- Null
- Undefined
- Never: Unusual type, for example an exception throwing never returning function.
- Any: Use for bypass type checking, like using a 3rd party JS library.

**Union Types and --strictNullChecks Compiler Option**

Union Types

```ts
let someValue = number | string;
someValue = 42; //OK
someValue = 'Hello World';  //OK
someValue = true; //NOT OK
```

If we set strictNullChecks true in compiler options.
```ts
let basicString: string;
basicString = null; //compiler error
basicString = undefined; //compiler error

let nullableString = string | null;
nullableString = null; //OK
nullableString = undefined; //compiler error

let mysteryString = string | null | undefined;
mysteryString = null; //OK
mysteryString = undefined;  //OK
```

**Type Assertions**

"< type > variable" and "variable as type" have same functionality.

```ts
let value: any = 5;

let fixedString: string = (<number>value).toFixed(4);
console.log(fixedString); //5.0000

let fixedString2 = (value as number).toFixed(4);
console.log(fixedString); //5.0000
```

**Control Based Type Analysis**

In this case type can only be string because of if block. So when we hover and check the type of messageElement we see only string type.

```ts
var messageElement = HTMLElement | string;
if(typeof messageElement === 'string') {
  return messageElement;
}
messageElement = document.getElementById('messages');
```

Summary
- Reduce confusion and increase clarity
- Reduce unintended consequences and increase stability
- Maintain flexibility

### 2.4. Writing Better Function with TypeScript

Overview
- Adding type annotations to functions
- Using arrow functions
- Declaring function types

**Adding Type Annotations to Functions**

```js
function dullFunc(val1, val2) {
  return "I'm boring and difficult, don't be like me."
}
```

**Question Mark: Marks the parameter as optional.** In this example message is an optional parameter.

```ts
function funFunc(score: number, message?: string): string {
  return "I am helpful, be lime me.";
}
```

**--noImplicitAny Compiler Option**

```ts
function dullFunc(value1, value2) {
  return "I am boring";
}
//error: Parameter 'value1' implicitly has an 'any' type
//error: Parameter 'value2' implicitly has an 'any' type
```

**Default-Initialized Parameters**

We can call this function without providing a parameter.

```ts
function sendGreeting(greeting: string = 'Good morning') {
  console.log(greeting);
}

sendGreeting(); //prints 'Good morning'
sendGreeting('Hello'); //prints 'Hello'
```

**Anatomy of an Arrow Function**
||||
|--|--|--|
||fat arrow||
|parameters|=>|function body|

If we use one parameter without type parenthesis are optional. 
```js
let squareIt = x => x * x;
console.log(squareIt(4)); //16

let adder = (a, b) => a + b;
console.log(adder(2, 3)); //5

let greeting = () => console.log('Hello World');
greeting();//Hello World
```

```js
let scores: number[] = [70, 125, 85, 110];
let highScores: number[];
highScores = scores.filter((element, index, array) => {
  if(element > 100) {
    return true;
  }
});
```

Usually we don't use return types for lambda functions. Also, we should declare commonly used functions as lambda too much.
```ts
const logMessage = (message: string): void => console.log(message);
```

Summary
- TypeScript functions are easier to use
- Flexibility included
- Clean syntax

### 2.5. Creating and Using Custom Types

Overview
- Interfaces
- Classes
- Supporting multi-file projects

|Interface|Class|
|--|--|
|Define a new type|Define a new type|
|Properties (signatures)|Properties (with implementation)|
|Methods (signatures)|Methods (with implementation)|
|cannot be instantiated|Can be instantiated|

**Creating an Interface**

**INTERFACE DEFINE ONLY SHAPE OF AN OBJECT.**

```ts
interface Employee {
  name: string;
  title: string;
}

interface Manager extends Employee {
  department: string;
  numOfEmployees: number;
  scheduleMeeting: (topic: string) => void;
}
```

TypeScript Structural Type System

This is possible because of TypeScript's structural type system. This is often referred as **DUCK TYPING**. If something walks like a duck, swims like a duck, quacks like a duck then it must be a duck.
```ts
interface Employee {
  name: string;
  title: string;
}

let developer = {
  name: 'Bob',
  title: 'TS Developer',
  editor: 'VS Code'
}

let newEmployee: Employee = developer;
```
**Demo: Creating Interfaces**

```ts
//result.ts
export interface Result {
    playerName: string;
    score: number;
    problemCount: number;
    factor: number;
}
```

```ts
//person.ts
export interface Person {
    name: string;
    age?: number;
    formatName: () => string;
}
```
age can be undefined. formatName implies method signature with string return.

```ts
//app.ts
import { Person } from "./person";
import { Result } from "./result";

let myResult: Result = {
    playerName: 'Marie',
    score: 5,
    problemCount: 5,
    factor: 7
};

let player: Person = {
    name: 'Jacobs',
    formatName: () => 'Jan'
}
```

**Class Members**
- Method implementations
- Property implementations
- Accessors (getter and setters)
- Access modifiers
  - **Public**: By default all members of classes are public
  - Private
  - Protected

```ts
class Developer {
  department: string;
  private _title: string;
  //getter and setter
  get title(): string {
    return this._title;
  }
  set title(newTitle: string) {
    this._title = newTitle.toUpperCase();
  }
  documentRequirements(requirements: string): void {
    console.log(requirements);
  } 
}
```

ECMAScript private fields are different from TypeScript private access modifier. TS modifiers run on compile time, we get standard class properties and during runtime we can access these class members Also, ECMAScript proposes # for private fields, these two modifiers don't have the same effect. Chose them by run environment.

**Extending Classes and Implementing Interfaces**

```ts
class WebDeveloper extends Developer {
  favoriteEditor: string;
  writeEditor: string;
  writeTypeScript(): void {
    //some code
  }
}
let webDev: WebDeveloper = new WebDeveloper();
webDev.department = 'Software Engineering';
webDev.favoriteEditor = 'VS Code';
```

Implementing an Interface

```ts
interface Employee {
  name: string;
  title: string;
  logID: () => string;
}
class Engineer implements Employee {
  name: string;
  title: string;
  logID() {
    return `${this.name}_${this.title}`
  }
}
```

We can import separated TS files like this and use exported classes from these files.

```ts
import { Person } from "./person";
import { Player } from "./player";
import { Result } from "./result";
```



