/*eslint no-new-func: "error"*/

const a = new Function("a", "b", "return a + b");
const b = Function("a", "b", "return a + b");
const c = Function.call(null, "a", "b", "return a + b");
const d = Function.apply(null, ["a", "b", "return a + b"]);
const x = Function.bind(null, "a", "b", "return a + b")();
const y = Function.bind(null, "a", "b", "return a + b"); // assuming that the result of Function.bind(...) will be eventually called.