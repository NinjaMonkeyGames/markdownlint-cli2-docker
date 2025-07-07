/*eslint no-prototype-builtins: "error"*/

const hasBarProperty = foo.hasOwnProperty("bar");

const isPrototypeOfBar = foo.isPrototypeOf(bar);

const barIsEnumerable = foo.propertyIsEnumerable("bar");