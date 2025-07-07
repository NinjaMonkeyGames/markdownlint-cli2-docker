// Passing an object or class instance to string concatenation:
'' + {};

class MyClass {}
const value = new MyClass();
value + '';

// Interpolation and manual .toString() and `toLocaleString()` calls too:
`Value: ${value}`;
String({});
({}).toString();
({}).toLocaleString();

// Stringifying objects or instances in an array with the `Array.prototype.join`.
[{}, new MyClass()].join('');