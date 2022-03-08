# pluralsight-ts-path
## 1. TypeScript: The Big Picture
### 1.1. Course Overview

It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

### 1.2. How TypeScript Can Help

TypeScript requires JavaScript. It uses JS as a baseline. TS is not a unique language.

**The Problem With JavaScript**

Developing complex applications with JS is challenging. **TS compiles/transpile to JS.** We get readable JS from compile operation.

**How TypeScript Helps: Static Typing**

JS is very dynamic and this causes unpredictable behavior in large scale projects. JS is an interpreted language. TS brings type, increases consistency.

**How TypeScript Helps: Organization**

TS makes easier to manage large codebase. 
- Class: Object oriented classes
- Namespace: We don't want everything globally available.
- Modules: Gives scope control.
- Interfaces: Interfaces. Expected methods and properties.
- 

TypeScript vs ECMAScript Class Compatibility
- Recent ES2015 standard adds class to JS, TypeScript classes supports even back to ES3(1999). Also, TS is always aligned with future ECMAScript proposals.

**How TypeScript Helps: Tooling**

Static type analysis, we get deep analyze results.
- static type analysis
- many "instant" errors
- detect unused data / unreachable code
- source maps - debug directly in TypeScript

### 1.3. Setting Up a TypeScript Development Environment

It is similar to JS, but provides a structuring mechanism for larger pieces of the code.

Writing and Compiling TypeScript

Sample code, but we can't load this file to browser we need to compile it.
```ts
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
```

**TSC: TypeScript Compiler**

We need to compile out ts file, install tsc with "npm install typescript -g" and run **"tsc basic.ts"**.

Insert transpiled js file to HTML and open HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>TypeScript Demo</title>
</head>
<body>
    <h1>Here is a basic heading.</h1>
    <script src="basic.js"></script>
</body>
</html>
```

**TypeScript Development Environment**

VS Code and Node.js. 

**TypeScript Project Configuration**

TS does not require a specific project structure. Also, we can configure transpile operation.

This command compiles the TS file to older JS version, class is replaced with a prototype based class at the output file 
```
tsc basic.ts
```

This is a more specific build command. We get a ES2015 compatible result JS in 'js' output directory.
```
tsc --target ES2015 --outDir js basic.ts
```

We can use TypeScript configuration files **"tsconfig.json"** to give configuration. Furthermore, we can manually add tsconfig.json file but also we can run **"tsc --init"**.

We can configure newly added JSON file for our project.

```json
{
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2015",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
     "outDir": "./js",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

### 1.4. Writing TypeScript Applications

**Explicit Types and Type Interface**

Benefits of TypeScript
- Static Types
    - variables, parameters, return types, etc.
- Organization
    - classes, modules, namespaces, interfaces
- Tooling
    - static analysis, instant errors, detect unused/unreachable code, source maps, etc.

**Static Types**

variables.js
```js
let firstName = "Alice";
let age = 72;
let activeMember = true;

firstName = 1; // OK in JavaScript
```

variables.ts
```ts
let firstName = "Alice";
let age = 72;
let activeMember = true;

firstName = 1; // NOT OK in JavaScript
```

<ins>**Type Inference**</ins>

variables.ts
```ts
let firstName = "Alice";    //inferred as a string
let age = 72;               //inferred as a number
let activeMember = true;    //inferred as a boolean
let someVar;    //this type is any

firstName = 123; //Type '123' is not assignable to type 'string'.
```

Type information in functions:
```ts
//TypeScript style function
function simpleFunction(name: string, isActive: boolean): number {
    return 0;
}

function simpleFunction(name: string, isActive: boolean): void {
}
```

These small changes improve code quality. 

**Defining TypeScript Classes**

<ins>**Classes**</ins>

```ts
class Customer {
    name: string;
    isActive: boolean;

    constructor(name: string) {
        this.name = name;
        this.isActive = false;
    }

    announce() {
        return `Hello, my name is ${this.name}`;
    }
}
```

We don't need to use let or var for class properties. We can use inheritance with 'extends' keyword.

Furthermore, we can use access modifiers **public, private, protected**.

**By default, member of a ts class is PUBLIC.**

**Working with Modules in TypeScript**

TS uses ES2015 module import method. JS has multiple methods for module loading.

```json
{
    "module": "es2015", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd',
    'es2015', or 'ESNext' */
}
```

In future JS will not need Ts.

**TypeScript: Next Steps**

We can get extra info from https://www.typescriptlang.org/docs/.
