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

We can add **watch** parameter to compile continuously

