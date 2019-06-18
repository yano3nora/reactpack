Webpack boilerplate for React x Redux with Redux Saga.
===

## Requirements
- nodejs >= v8.*

## Getting Started
```
$ npm ci

$ npm run watch  # Build & Watch.
$ npm run build  # Build & Minify.
```

### Install / Remove packages.
```
$ npm i -S ${package}  # Install as --save
$ npm i -D ${package}  # Install as --save-dev

$ npm remove -S ${package}  # Uninstall as --save
$ npm remove -D ${package}  # Uninstall as --save-dev
```

## Composition
```
src/
  bases/
    - logger-middleware.js  // Middlewares for store.
    - async-middleware.js
  components/
    todo/
      - todo-container.js   // Provider container using modules.
      - todo-list.js        // Pure component children.
      - todo-stat.js
  modules/
    - todo-module.js        // Reducers and Actions for container component.
```
