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

### 2.2. Taking Advantage of Built-in Types

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