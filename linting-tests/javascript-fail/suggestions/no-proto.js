/*eslint no-proto: "error"*/

const a = obj.__proto__;

const a1 = obj["__proto__"];

obj.__proto__ = b;

obj["__proto__"] = b;