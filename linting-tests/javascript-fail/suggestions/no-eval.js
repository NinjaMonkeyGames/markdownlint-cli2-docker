/*eslint no-eval: "error"*/

const obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

(0, eval)("const a = 0");

const foo = eval;
foo("const a = 0");

// This `this` is the global object.
this.eval("const a = 0");