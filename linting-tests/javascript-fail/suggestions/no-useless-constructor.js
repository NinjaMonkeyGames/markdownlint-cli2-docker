/*eslint no-useless-constructor: "error"*/

class A {
    constructor () {
    }
}

class B extends A {
    constructor (...args) {
      super(...args);
    }
}