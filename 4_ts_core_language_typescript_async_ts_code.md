## 4. Creating Asynchronous TypeScript Code
### 4.1. Course Overview
- Identifying asynchronous code
- Three most common async code patterns
    - Callbacks
    - Promises
    - Async await
- Respond to and create callback functions
- How to chain promises
- Using the async/await pattern

### 4.1. Getting Started with Asynchronous Code

In this example we execute setTimeout function block asynchronously.
```ts
  setTimeout(() => {
    counter++;
    console.log(`${counter} - Bake at 325 degrees for 10 minutes`);
    showMessage(`${counter} - Bake at 325 degrees for 10 minutes`, title, true);
  }, 1000);
```

**Tooling**
- Install nodejs
    - node --version
    - npm --version
- VS Code
    - Prettier
    - ESLint

### 4.2. Identify When to Write Asynchronous Code


