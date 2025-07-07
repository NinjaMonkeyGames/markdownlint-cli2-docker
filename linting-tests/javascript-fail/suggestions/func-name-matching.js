/*eslint func-name-matching: ["error", { "considerPropertyDescriptor": true }]*/
// equivalent to /*eslint func-name-matching: ["error", "always", { "considerPropertyDescriptor": true }]*/
const obj = {};
Object.create(obj, {foo:{value: function bar() {}}});
Object.defineProperty(obj, 'bar', {value: function baz() {}});
Object.defineProperties(obj, {baz:{value: function foo() {} }});
Reflect.defineProperty(obj, 'foo', {value: function value() {}});